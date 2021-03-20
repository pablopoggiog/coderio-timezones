import React, { useContext, useState } from "react";
import { ZonesContext } from "src/context";
import { Container, Bar } from "./styles";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { addZone } = useContext(ZonesContext);

  return (
    <Container>
      <Bar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addZone(e.target.value);
            setQuery("");
          }
        }}
      />
    </Container>
  );
};
