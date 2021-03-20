import styled from "styled-components";
import { SearchBar, Boxes } from "src/components";
import { ZonesContextProvider } from "src/context";

const App = () => {
  return (
    <ZonesContextProvider>
      <Container>
        <SearchBar />
        <Boxes />
      </Container>
    </ZonesContextProvider>
  );
};

export default App;

const Container = styled.div`
  text-align: center;
  padding: 3em;
`;
