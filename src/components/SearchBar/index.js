import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ZonesContext } from "src/context";
import { Container, Bar, Suggestions, Suggestion } from "./styles";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { addZone } = useContext(ZonesContext);

  const fetchZones = async () => {
    const response = await axios("http://worldtimeapi.org/api/timezone");
    setOptions(response.data);
  };

  const fetchZone = async (zone) => {
    const response = await axios(
      `http://worldtimeapi.org/api/timezone/${zone}`
    );
    addZone(response.data);
  };

  useEffect(() => {
    fetchZones();
  }, []);

  useEffect(() => {
    if (query) {
      const zones = options.filter((zone) =>
        zone.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(zones);
    } else setSuggestions([]);
  }, [query]);

  return (
    <Container>
      <Bar
        placeholder="Enter a timezone"
        options={suggestions}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <Suggestions>
          {suggestions.map((suggestion, index) => (
            <Suggestion
              key={index}
              onClick={() => {
                fetchZone(suggestion);
                setQuery("");
                setSuggestions([]);
              }}
            >
              {suggestion}
            </Suggestion>
          ))}
        </Suggestions>
      )}
    </Container>
  );
};
