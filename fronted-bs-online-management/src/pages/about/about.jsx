import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Container className="about-section my-5">
      {/* Logo + About */}
      <Row className="align-items-center mb-5">
        <Col md={4} className="text-center">
          <img
            src="http://www.giccl.edu.pk/assets/images/1.jpg"
            alt="GIGCCL Logo"
            className="img-fluid rounded"
            style={{ maxHeight: "180px" }}
          />
        </Col>
        <Col md={8}>
          <h2 className="fw-bold">About GIGCCL</h2>
          <p className="lead">
            Government Islamia Graduate College for Commerce Lahore (GIGCCL) stands
            as a beacon of educational excellence, serving the community for over
            75 years with unwavering commitment to quality education and character building.
          </p>
          <ul>
            <li>Established: 1950</li>
            <li>Government Institution</li>
            <li>Modern Campus Building</li>
          </ul>
        </Col>
      </Row>

      {/* Stats */}
      <Row className="text-center mb-5">
        <Col md={3}>
          <h3 className="fw-bold">15,000+</h3>
          <p>Students Enrolled</p>
        </Col>
        <Col md={3}>
          <h3 className="fw-bold">50+</h3>
          <p>Programs Offered</p>
        </Col>
        <Col md={3}>
          <h3 className="fw-bold">75+</h3>
          <p>Years of Excellence</p>
        </Col>
        <Col md={3}>
          <h3 className="fw-bold">50,000+</h3>
          <p>Graduates Produced</p>
        </Col>
      </Row>

      {/* Mission & Vision */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm p-3">
            <Card.Title className="fw-bold text-primary">Our Mission</Card.Title>
            <Card.Text>
              To provide quality higher education that develops intellectual
              capabilities, professional competencies, and ethical values in
              students, preparing them to become productive citizens and leaders
              who contribute positively to society and the global community.
            </Card.Text>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm p-3">
            <Card.Title className="fw-bold text-success">Our Vision</Card.Title>
            <Card.Text>
              To be a leading institution of higher learning, recognized for
              academic excellence, innovative research, and character
              development, fostering an environment where students, faculty, and
              staff can achieve their highest potential.
            </Card.Text>
          </Card>
        </Col>
      </Row>

      {/* Journey */}
      <Row className="mb-5">
        <Col>
          <h3 className="fw-bold mb-3">Our Journey - 75 Years of Excellence</h3>
          <ul>
            <li>1950 – Founded as Government Islamia College</li>
            <li>1975 – Upgraded to Graduate College status</li>
            <li>1990 – Introduced Commerce & Business programs</li>
            <li>2000 – Launched Computer Science programs</li>
            <li>2010 – Started online education initiatives</li>
            <li>2020 – Became fully digital campus</li>
            <li>2025 – Celebrating 75 years of excellence</li>
          </ul>
        </Col>
      </Row>

      {/* Facilities */}
      <Row className="mb-5">
        <h3 className="fw-bold mb-3">Campus Facilities</h3>
        {[
          "Modern Library (50,000+ books)",
          "Computer Labs (state-of-the-art)",
          "Science Laboratories",
          "Sports Complex",
          "500-seat Auditorium",
          "Cafeteria",
        ].map((facility, i) => (
          <Col md={4} key={i} className="mb-3">
            <Card className="shadow-sm p-3 h-100">{facility}</Card>
          </Col>
        ))}
      </Row>

      {/* Academic Excellence */}
      <Row className="mb-5">
        <Col>
          <h3 className="fw-bold">Academic Excellence</h3>
          <p>
            Offering BS in 50+ disciplines, Master's programs, certifications, and
            active research programs. Features include:
          </p>
          <ul>
            <li>Semester-based credit system</li>
            <li>Morning and Evening shifts</li>
            <li>Qualified & Experienced Faculty</li>
            <li>Continuous Evaluation</li>
          </ul>
        </Col>
      </Row>

      {/* Leadership */}
      <Row className="mb-5">
        <h3 className="fw-bold mb-3">Leadership Team</h3>
        {[
          {
            name: "Prof. Dr. Muhammad Ali Khan",
            role: "Principal",
            details: "PhD in Education Management | 25 years in higher education",
          },
          {
            name: "Dr. Fatima Ahmed",
            role: "Vice Principal (Academic)",
            details: "PhD in Computer Science | 20 years in academia",
          },
          {
            name: "Mr. Tariq Hassan",
            role: "Registrar",
            details: "MBA in Administration | 18 years in administration",
          },
        ].map((leader, i) => (
          <Col md={4} key={i} className="mb-3">
            <Card className="shadow-sm p-3 h-100">
              <Card.Title>{leader.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {leader.role}
              </Card.Subtitle>
              <Card.Text>{leader.details}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Core Values */}
      <Row className="mb-5">
        <h3 className="fw-bold mb-3">Our Core Values</h3>
        {[
          "Excellence – Striving for the highest standards",
          "Integrity – Honesty and transparency",
          "Innovation – Embracing new ideas",
          "Inclusivity – Welcoming all backgrounds",
          "Community Service – Serving society",
          "Character Building – Developing moral leaders",
        ].map((value, i) => (
          <Col md={4} key={i} className="mb-3">
            <Card className="shadow-sm p-3 h-100">{value}</Card>
          </Col>
        ))}
      </Row>

      {/* Contact */}
      <Row>
        <h3 className="fw-bold mb-3">Contact Information</h3>
        <Col md={6}>
          <p>
            <strong>Address:</strong> H8F3+33M Library, St Nagar, Lahore, 54000
          </p>
          <p>
            <strong>Phone:</strong> +92-42-111-442-325
          </p>
          <p>
            <strong>Email:</strong> info@giccl.edu.pk
          </p>
        </Col>
        <Col md={6}>
          <p>
            <strong>Office Hours:</strong> Mon-Fri 9AM-4PM | Sat 9AM-1PM
          </p>
          <p>
            <strong>Admission Office:</strong> Mon-Sat 9AM-3PM
          </p>
          <p>
            <strong>Email:</strong> admissions@giccl.edu.pk
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export { About };
