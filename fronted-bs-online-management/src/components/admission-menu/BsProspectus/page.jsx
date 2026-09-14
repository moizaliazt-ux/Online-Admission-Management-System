import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './BsProspectus.css';


const BsProspectus = () => {
  return (
    <div className="prospectus-wrapper">
      {/* Banner Section */}
      <div className="prospectus-banner text-center">
        <h1>GIGCCL Prospectus 2025</h1>
        <p>Government Islamia Graduate College for Commerce Lahore</p>
        <Button variant="primary">Download Prospectus</Button>
      </div>

      <Container>
        {/* About Section */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <h5>📖 About GIGCCL</h5>
            <p>
              Government Islamia Graduate College for Commerce Lahore (GICCL) is
              a premier educational institution established in 1970, dedicated to
              promoting academic excellence...
            </p>
            <Row className="text-center my-3">
              <Col><h4>75+</h4><p>Faculty Members</p></Col>
              <Col><h4>18k+</h4><p>Students Enrolled</p></Col>
              <Col><h4>20+</h4><p>BS Programs</p></Col>
              <Col><h4>100+</h4><p>Alumni in Top Positions</p></Col>
            </Row>
            <Row>
              <Col><p><b>📍 Address:</b> Shahrah-e-Quaid-e-Azam...</p></Col>
              <Col><p><b>📞 Contact:</b> (042) 9920-...</p></Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Programs Section */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <h5>🎓 BS Programs Offered (20 Programs)</h5>
            <Row>
              {[
                "BS Computer Science", "BS IT", "BS Economics", "BS English",
                "BS Mathematics", "BS BBA", "BS Statistics", "BS Urdu",
                "BS Commerce", "BS Islamic Studies", "BS Mass Communication",
                "BS Political Science", "BS Psychology", "BS Chemistry",
                "BS Physics", "BS Botany", "BS Zoology", "BS History",
                "BS Fine Arts", "BS Philosophy",
              ].map((program, idx) => (
                <Col md={6} key={idx} className="mb-3">
                  <Card className="program-card">
                    <Card.Body className="d-flex justify-content-between">
                      <span>{program}</span>
                      <Button size="sm" variant="success">View</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>

        {/* Fee Structure */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <h5>💰 Fee Structure (Academic Year 2025)</h5>
            <Row>
              <Col md={6}>
                <Card className="p-3 bg-light">
                  <h6>Morning Shift</h6>
                  <p><b>1st Semester:</b> Rs. 9,500</p>
                  <p><b>2nd-8th Semester:</b> Rs. 3,200</p>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="p-3 bg-light">
                  <h6>Evening Shift</h6>
                  <p><b>1st Semester:</b> Rs. 15,000</p>
                  <p><b>2nd-8th Semester:</b> Rs. 5,000</p>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Dates Section */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <h5>📅 Important Dates – Spring 2025</h5>
            <ul>
              <li>Application Start Date: <b>March 1, 2025</b></li>
              <li>Application End Date: <b>March 30, 2025</b></li>
              <li>Entry Test: <b>April 5, 2025</b></li>
              <li>Result Date: <b>April 10, 2025</b></li>
              <li>Merit List: <b>April 12, 2025</b></li>
              <li>Classes Start: <b>May 1, 2025</b></li>
            </ul>
          </Card.Body>
        </Card>

        {/* Merit Section */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <h5>📊 Merit Criteria & Requirements</h5>
            <Row>
              <Col md={6}>
                <h6>Eligibility Requirements:</h6>
                <ul>
                  <li>Intermediate with min. 45% marks</li>
                  <li>FA/FSc/ICS/I.Com or equivalent</li>
                </ul>
              </Col>
              <Col md={6}>
                <h6>Merit Calculation:</h6>
                <ul>
                  <li>Matric: 30%</li>
                  <li>Intermediate: 70%</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Final CTA */}
        <Card className="text-center p-4 shadow-sm">
          <h5>Ready to Apply?</h5>
          <p>Begin your journey towards success with GIGCCL’s BS Degree Programs</p>
          <Button variant="primary" className="me-2">Apply Now</Button>
          <Button variant="outline-primary">View Admission Guide</Button>
        </Card>
      </Container>
    </div>
  );
};

export default BsProspectus;
