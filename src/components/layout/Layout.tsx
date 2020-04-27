import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container fluid>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
    <Footer />
  </>
);

export default Layout;
