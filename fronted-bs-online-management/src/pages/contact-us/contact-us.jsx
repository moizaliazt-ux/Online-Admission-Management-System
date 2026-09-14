import React from "react";
import GoogleMap from "./google-map";
import { Col, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container>
      <Row className="mt-3 mb-3">
        <Col md={6} className="contact-card contact-info">
          <h2>Contact Us</h2>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-start gap-3">
              <i className="bi bi-telephone"></i>
              <div>
                <h5>Phone</h5>
                <p>042-99210676</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3">
              <i className="bi bi-envelope"></i>
              <div>
                <h5>Email</h5>
                <p>giccllahore@gmail.com</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="google-map">
            <GoogleMap />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { ContactUs };
