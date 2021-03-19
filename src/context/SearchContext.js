import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  React.useEffect(() => {
    console.log("el query es ", query);
  }, [query]);

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
