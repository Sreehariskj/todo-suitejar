import React from "react";
import { Col, Row } from "react-bootstrap";
import LoginLeftSide from "../components/LoginLeftSide";
import LoginRightSide from "../components/LoginRightSide";

const Login = () => {
  return (
    <Row>
      <Col md={6}>
        <LoginLeftSide />
      </Col>
      <Col md={6}>
        <LoginRightSide />
      </Col>
    </Row>
  );
};

export default Login;
