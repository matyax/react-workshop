import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer: React.FC = () => (
  <Container fluid>
    <Row>Copyright {new Date().getFullYear()}</Row>
  </Container>
);

export default Footer;
