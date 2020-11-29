import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./rootTitleBar.scss";

const RootTitleBar = () => {
  return (
    <Container className="no-border">
      <Row className="no-margin-left-right row-buffer center title-bar">
        <Col>Title Bar</Col>
      </Row>
    </Container>
  );
};

export default RootTitleBar;
