import styled from "styled-components";
import { SearchBar } from "src/components";

const App = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default App;

const Container = styled.div`
  text-align: center;
`;
