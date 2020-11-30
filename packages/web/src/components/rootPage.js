import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuoteTable from "./quotes/quoteTable";

import "./rootPage.scss";

const RootPage = () => {
  // let QuoteList =

  return (
    <Container className="body-section">
      <Row className="no-margin-left-right row-buffer page-content">
        <Col xs={1}>
          <Row className="left-menu">
            <div className="m-title">Menu</div>
          </Row>
          <Row></Row>
        </Col>
        <Col xs={11}>
          <QuoteTable />
        </Col>
      </Row>
    </Container>
  );
};

export default RootPage;
