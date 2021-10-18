import React from "react";
import { Container, Dot } from './styles';


const Notification = ({ children, isVisible, ...props }) => {
  return (
    <Container {...props}>
      {children}
      {isVisible ? <Dot /> : null}
    </Container>
  );
};

export default Notification;
