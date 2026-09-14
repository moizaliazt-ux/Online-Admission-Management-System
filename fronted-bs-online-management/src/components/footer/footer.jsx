import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { LinkRouter } from "../comon";

const Footer = () => {
  return (
    <footer style={{ background: "#036674", color: "#fff" }}>
      <Container>
        <Row className="py-5 px-3">
          {/* College Info */}
          <Col md={3} className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
                alt="GIGCCL Logo"
                width="55"
                height="55"
                className="rounded-circle"
              />
              <span className="fs-5 fw-bold">GIGCCL</span>
            </div>
            <Stack gap={1}>
              <span>Government Islamia Graduate College</span>
              <span>University of the Punjab</span>
              <span>BISE Lahore</span>
            </Stack>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <Stack gap={2}>
              <LinkRouter path="/about" title="About GIGCCL" className="footer-link" />
              <LinkRouter path="/admissions" title="Admissions" className="footer-link" />
              <LinkRouter path="/merit-list" title="Merit List" className="footer-link" />
              <LinkRouter path="/fee-structure" title="Fee Structure" className="footer-link" />
            </Stack>
          </Col>

          {/* Academic Programs */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Academic Programs</h5>
            <Stack gap={2}>
              <span className="footer-link">BS Computer Science</span>
              <span className="footer-link">BS Business Administration</span>
              <span className="footer-link">BS Economics</span>
              <span className="footer-link">BS English</span>
              <span className="footer-link">BS Psychology</span>
            </Stack>
          </Col>

          {/* Connect With Us */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Connect with Us</h5>
            <p className="mb-1">📍 H8F3+33M Library, St Nagar, Lahore, 54000</p>
            <p className="mb-1">📞 +92-42-111-442-325</p>
            <p className="mb-3">✉️ info@giccl.edu.pk</p>
            <div className="d-flex gap-3">
              <a href="#" className="footer-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <Row className="text-center py-3">
          <p className="mb-0 small">
            © 2025 Government Islamia Graduate College for Commerce Lahore. All rights reserved. <br />
            Powered by <span className="fw-bold">GIGCCL Online Admission Management System</span>
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
