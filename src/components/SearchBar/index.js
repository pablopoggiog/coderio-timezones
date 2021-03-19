import React, { useContext } from "react";
import { SearchContext } from "src/context/SearchContext";
import { Container, Bar } from "./styles";

export const SearchBar = () => {
  const { query, setQuery } = useContext(SearchContext);

  return (
    <Container>
      <Bar value={query} onChange={(e) => setQuery(e.target.value)} />
    </Container>
  );
};
