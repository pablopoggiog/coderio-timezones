import React from "react";
import { useSearch } from "src/hooks";
import { Container, Bar, Suggestions, Suggestion } from "./styles";

export const SearchBar = () => {
  const {
    query,
    setQuery,
    suggestions,
    setSuggestions,
    fetchZone,
  } = useSearch();

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
                // Fetches the selected suggestion, reset query and suggestions
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
