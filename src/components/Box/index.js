import React from "react";
import Loading from "react-simple-loading";
import { useDate } from "src/hooks";
import { Container, DeleteBox, Content, Zone, Date, Time } from "./styles";

export const Box = ({ zone, remove }) => {
  const { time, date } = useDate(zone);

  return (
    <Container>
      <DeleteBox onClick={remove}>X</DeleteBox>
      <Content>
        <Zone>{zone}</Zone>
        {date && time ? (
          <>
            <Date>{date}</Date>
            <Time>{time}</Time>
          </>
        ) : (
          <Loading />
        )}
      </Content>
    </Container>
  );
};
