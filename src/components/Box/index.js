import React from "react";
import { Container, DeleteBox, Content, Zone, Date, Time } from "./styles";

export const Box = ({ zone, date, time, remove }) => {
  return (
    <Container>
      <DeleteBox onClick={remove}>X</DeleteBox>
      <Content>
        <Zone>{zone}</Zone>
        <Date>{date}</Date>
        <Time>{time}</Time>
      </Content>
    </Container>
  );
};
