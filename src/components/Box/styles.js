import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 200px;
  width: 100%;
  background-color: lightgrey;
  border-radius: 10px;
  animation: ${fadeIn} 0.6s ease 1;

  @media all and (min-width: 620px) {
    min-width: 200px;
    width: 30%;
  }
`;
export const DeleteBox = styled.div`
  width: 10px;
  margin: 15px 20px auto auto;
`;

export const Content = styled.div``;

export const Zone = styled.h3``;

export const Date = styled.p``;

export const Time = styled.p``;
