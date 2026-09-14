import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

const MeritList = () => {
  const [students, setStudents] = useState([]);
  const [filterProgram, setFilterProgram] = useState("");
  const [filterShift, setFilterShift] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/merit-list")
      .then((res) => setStudents(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  // Apply filters (default: show all students)
  const filteredStudents = students.filter((s) => {
    return (
      (filterProgram === "" || s.program === filterProgram) &&
      (filterShift === "" || s.shift === filterShift)
    );
  });

  return (
    <Container className="my-5">
      {/* Filters */}
      <Row className="mb-4">
        <Col md={5}>
          <Form.Select
            className="rounded-3 shadow-sm"
            value={filterProgram}
            onChange={(e) => setFilterProgram(e.target.value)}
          >
            <option value="">All Programs</option>
            <option value="bs_cs">BS Computer Science</option>
            <option value="bs_economics">BS Economics</option>
            <option value="bs_bba">BS Business Administration</option>
            <option value="bs_psychology">BS Psychology</option>
            <option value="bs_english">BS English</option>
            <option value="bs_it">BS IT</option>
            <option value="bs_science">BS Science</option>
          </Form.Select>
        </Col>

        <Col md={5}>
          <Form.Select
            className="rounded-3 shadow-sm"
            value={filterShift}
            onChange={(e) => setFilterShift(e.target.value)}
          >
            <option value="">All Shifts</option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover responsive className="mb-0 rounded-3">
        <thead style={{ background: "#036674", color: "white" }}>
          <tr>
            <th>Rank</th>
            <th>Student Name</th>
            <th>Father's Name</th>
            <th>CNIC</th>
            <th>Program</th>
            <th>Shift</th>
            <th>Merit Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((s) => (
              <tr key={s.cnic}>
                <td>{s.rank}</td>
                <td>{s.studentName}</td>
                <td>{s.fatherName}</td>
                <td>{s.cnic}</td>
                <td>{s.program}</td>
                <td>{s.shift}</td>
                <td>{s.meritScore}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default MeritList;
