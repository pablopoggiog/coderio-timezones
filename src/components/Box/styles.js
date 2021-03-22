import styled, { keyframes } from "styled-components";
import dots from "src/assets/dots.jpg";

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
  background-image: url(${dots});
  border-radius: 10px;
  border: 1.5px solid darkgrey;
  animation: ${fadeIn} 0.6s ease 1;
  transition: 0.6s;

  @media all and (min-width: 620px) {
    min-width: 200px;
    width: 30%;
  }

  &:hover {
    transform: scale(1.01);
  }
`;
export const DeleteBox = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;
  padding: 0.7em;
  cursor: pointer;
  transition: 0.6s;
  border-radius: 10px;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div``;

export const Zone = styled.h4``;

export const Date = styled.p``;

export const Time = styled.p``;
