import React, { useContext } from "react";
import {
  Container,
  Card,
  Button,
  ListGroup,
  Badge,
  Accordion,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFilePdf,
  FaBullhorn,
  FaFutbol,
  FaMusic,
} from "react-icons/fa";
import "./admissions.css";
import { ActiveContext } from "../../../App";

const AdmissionsPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(ActiveContext);

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Container className="my-5 admissions-container">
      <Card className="mb-4 border-0 shadow-lg rounded-3 header-card">
        <Card.Body className="p-5 text-center">
          <h1 className="display-5 fw-bold text-white">🎓 ADMISSIONS 2025</h1>
          <Card.Text className="lead text-light mt-3">
            Start your academic journey at{" "}
            <span className="fw-bold">GIGCCL University</span>. Find all the
            details here to apply for our degree programs.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* BS Admissions */}
      <Card className="mb-4 admission-card">
        <Card.Header className="admission-card-header">
          <h2 className="mb-0">BS ADMISSIONS 2025 - ONLY FOR BOYS</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text className="fs-5 mb-3">
            📢 The last date to apply for admission in BS/BSC has been extended
            till <strong>23rd April, 2025</strong>.
          </Card.Text>

          <div className="d-flex flex-wrap gap-3 mb-4">
            {!user?.isRegistered && (
              <Button className="apply-btn" size="lg" onClick={handleClick}>
                Apply Online
              </Button>
            )}
            <Button
              className="prospectus-btn"
              size="lg"
              as="a"
              href="https://applyonline.giccl.edu.pk/resources/downloads/GIGCCL_PROSPECTUS_2023-24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FaFilePdf className="me-2" /> Download Prospectus
            </Button>
          </div>

          <div className="alert alert-warning d-flex align-items-center">
            <FaBullhorn className="me-2" />
            <div>Please ensure all documents are ready before applying.</div>
          </div>
        </Card.Body>
      </Card>

      {/* Accordion Sections */}
      <Accordion defaultActiveKey="0" className="mb-4 admission-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <FaCalendarAlt className="me-2 text-primary" />
            Advertisement of BS/Intermediate Admissions 2025
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The official advertisement for BS/BSc admissions 2025 has been
              published. Please review the guidelines and eligibility criteria
              carefully.
            </p>
            <Button variant="outline-dark">
              View Advertisement <FaFilePdf className="ms-2" />
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <FaMusic className="me-2 text-success" />
            Schedule of Trials for Co-Curricular Activities
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>🎤 Singing Auditions – 10th May 2025</li>
              <li>🎭 Drama/Stage Trials – 12th May 2025</li>
              <li>📚 Quiz Competition Trials – 15th May 2025</li>
            </ul>
            <Badge bg="info">Updated</Badge>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <FaFutbol className="me-2 text-danger" />
            Schedule of Trials for Sports Admissions
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>⚽ Football – 18th May 2025</li>
              <li>🏀 Basketball – 20th May 2025</li>
              <li>🏏 Cricket – 22nd May 2025</li>
            </ul>
            <Badge bg="warning">Seats Limited</Badge>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Contact Information */}
      <Card className="contact-card border-0 shadow">
        <Card.Header className="contact-header">
          <h3 className="mb-0 text-white">📞 Contact Registrar Office</h3>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <FaEnvelope className="me-2 text-primary" />
              <strong>Email:</strong> giccllahore@gmail.com
            </ListGroup.Item>
            <ListGroup.Item>
              <FaPhone className="me-2 text-success" />
              <strong>Phone:</strong> 042-9921067, 042-99212477
            </ListGroup.Item>
            <ListGroup.Item>
              <FaMapMarkerAlt className="me-2 text-danger" />
              <strong>Address:</strong> H8F3+33M Library, St Nagar, Lahore,
              54000
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export { AdmissionsPage };
