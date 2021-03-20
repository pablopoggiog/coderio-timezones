import React from "react";
import { Container, Button } from "./styles";

export const Toggler = ({ toggleTheme }) => (
  <Container>
    <Button onClick={toggleTheme}>Switch Theme</Button>
  </Container>
);
