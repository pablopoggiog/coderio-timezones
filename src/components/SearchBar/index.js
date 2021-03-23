import React, { useContext } from "react";
import { useSearch } from "src/hooks";
import { ZonesContext } from "src/context";
import { Container, Bar, Suggestions, Suggestion } from "./styles";

export const SearchBar = () => {
  const { query, setQuery, suggestions, setSuggestions } = useSearch();

  const { addZone, zones } = useContext(ZonesContext);

  // I show only the first 25 suggestions
  const filteredSuggestions = suggestions
    .filter((suggestion) => !zones.includes(suggestion))
    .slice(0, 20);

  return (
    <Container>
      <Bar
        placeholder="Enter a timezone"
        options={suggestions}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredSuggestions.length > 0 && (
        <Suggestions>
          {filteredSuggestions.map((suggestion, index) => (
            <Suggestion
              key={index}
              onClick={() => {
                // Add a box with for selected suggestion, reset query and suggestions
                addZone(suggestion);
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
