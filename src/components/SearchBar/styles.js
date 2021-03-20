import styled from "styled-components";

export const Container = styled.div`
  & input {
    width: 100%;
    pading: auto;
    height: 50px;
    display: flex;
    align-items: center;
  }
`;

export const Bar = styled.input`
  text-align: center;
  border-radius: 10px;
  border: 1px dotted grey;

  &:focus {
    outline: 0;
  }
`;

export const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  color: grey;
  position: absolute;
  background-color: #f1f1f1;
  padding: 1em;
`;

export const Suggestion = styled.p`
  cursor: pointer;
  margin: 0;
`;
