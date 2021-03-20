import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  margin: 1em 0;
  width: 7em;
`;

export const Button = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  width: 150px;

  &:focus {
    outline: 0;
  }
`;
