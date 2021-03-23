import { useState, useEffect } from "react";
import axios from "axios";

export const useSearch = () => {
  // What's entered in the SearchBar
  const [query, setQuery] = useState("");
  // The fetched options list
  const [options, setOptions] = useState(null);
  // The api used for the exercise is pretty prono to errors, so i wanna give the user a clue in case it doesn't respond well
  const [newtorkError, setNewtorkError] = useState(false);
  // Suggestions based on the query
  const [suggestions, setSuggestions] = useState([]);

  const fetchZones = async () => {
    try {
      const response = await axios("http://worldtimeapi.org/api/timezone");
      setOptions(response.data);

      // When there's a network error from the api, usually the call shows as pending for a while before crashing, so here that's being catched and treated as what it'll be: a network error.
      setTimeout(() => {
        !options && !!query && setNewtorkError(true);
      }, 2500);
    } catch (e) {
      setNewtorkError(true);
    }
  };

  useEffect(() => {
    // Fetches the list of zones when mounting the component
    fetchZones();
  }, []);

  useEffect(() => {
    // If there's a query, it filters among the options list to throw suggestions
    if (query && options) {
      const zones = options.filter((zone) =>
        zone.toLowerCase().includes(query.toLowerCase())
      );

      setSuggestions(zones);
    } else setSuggestions([]);
  }, [query, options]);

  return {
    query,
    setQuery,
    suggestions,
    setSuggestions,
    newtorkError,
  };
};
