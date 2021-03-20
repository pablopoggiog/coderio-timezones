import styled from "styled-components";

export const Container = styled.div`
  & input {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }
`;

export const Bar = styled.input`
  text-align: center;
  border-radius: 10px;
  border: 1px dotted grey;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

  &:focus {
    outline: 0;
  }
`;

export const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  position: absolute;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  padding: 1em;
  z-index: 1;
`;

export const Suggestion = styled.p`
  cursor: pointer;
  margin: 0;
`;
