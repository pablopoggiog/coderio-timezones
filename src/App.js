import styled from "styled-components";
import { SearchBar } from "src/components";
import { SearchContextProvider } from "src/context/SearchContext";

const App = () => {
  return (
    <SearchContextProvider>
      <Container>
        <SearchBar />
      </Container>
    </SearchContextProvider>
  );
};

export default App;

const Container = styled.div`
  text-align: center;
`;
