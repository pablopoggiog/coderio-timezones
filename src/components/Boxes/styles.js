import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
  gap: 3em;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.6s;

  @media all and (min-width: 620px) {
    flex-flow: row wrap;
    padding: 3em 1em;
    gap: 1em;
  }
`;
