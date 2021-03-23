import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { SearchBar, Boxes, Toggler, Error } from "src/components";
import { ZonesContextProvider } from "src/context";
import { lightTheme, darkTheme } from "src/theme";
import { useSearch } from "src/hooks";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const { newtorkError } = useSearch();

  const themeToggler = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ZonesContextProvider>
        <Container>
          {newtorkError && <Error />}
          <Toggler toggleTheme={themeToggler} />
          <SearchBar />
          <Boxes />
        </Container>
      </ZonesContextProvider>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  text-align: center;
  padding: 1em;
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  box-sizing: border-box;
  transition: 0.6s;
`;
