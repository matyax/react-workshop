import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Container, Row } from "react-bootstrap";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container fluid>
      <Row>{children}</Row>
    </Container>
    <Footer />
  </>
);

export default Layout;
