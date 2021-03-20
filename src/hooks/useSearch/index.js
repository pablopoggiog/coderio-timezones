import { useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { ZonesContext } from "src/context";

export const useSearch = () => {
  // What's entered in the SearchBar
  const [query, setQuery] = useState("");
  // The fetched options list
  const [options, setOptions] = useState([]);
  // Timezones in localStorage
  const [timezones, _] = useState(
    JSON.parse(window.localStorage.getItem("timezones"))
  );
  // Suggestions based on the query
  const [suggestions, setSuggestions] = useState([]);
  const { addZone } = useContext(ZonesContext);

  const fetchZones = async () => {
    try {
      const response = await axios("http://worldtimeapi.org/api/timezone");
      setOptions(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchZone = useCallback(
    async (zone) => {
      try {
        const response = await axios(
          `http://worldtimeapi.org/api/timezone/${zone}`
        );
        addZone(response.data);
      } catch (e) {
        console.log(e);
      }
    },
    [addZone]
  );

  useEffect(() => {
    // If there are timezones in localStorage (only the names), it fetches its info
    if (timezones) {
      timezones.map((timezone) => fetchZone(timezone));
    }
  }, [timezones, fetchZone]);

  useEffect(() => {
    // Fetches the list of zones when mounting the component
    fetchZones();
  }, []);

  useEffect(() => {
    // If there's a query, it filters among the options list to throw suggestions
    if (query) {
      const zones = options.filter((zone) =>
        zone.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(zones);
    } else setSuggestions([]);
  }, [query, options]);

  return { query, setQuery, suggestions, setSuggestions, fetchZone };
};
