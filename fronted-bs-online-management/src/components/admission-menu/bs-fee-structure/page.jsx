import React, { useState } from "react";
import { Accordion, Card, Table, Form, Badge } from "react-bootstrap";
import { BsCheckCircleFill, BsCurrencyDollar, BsBookHalf } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { fines, footnotes, programGroups, rules } from "./data";

const FeeRules = () => {
  const [shift, setShift] = useState("Morning");

  return (
    <div className="container my-5">
      <h3 className="fw-bold text-center text-primary mb-4">
        🎓 Undergraduate / Postgraduate Fee Details
      </h3>

      <Accordion defaultActiveKey="0" flush>
        {/* Rules Section */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <BsBookHalf className="me-2 text-primary" />
            Fee / Dues: Rules & Regulations
          </Accordion.Header>
          <Accordion.Body>
            {rules.map((rule, idx) => (
              <p key={idx} className="mb-2">
                <BsCheckCircleFill className="text-success me-2" />
                {rule}
              </p>
            ))}

            <h5 className="mt-4 text-dark">⚠️ Fines Policy</h5>
            <Table striped bordered hover responsive className="mt-2 shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th>Sr. No.</th>
                  <th>Period</th>
                  <th>Fine (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {fines.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.period}</td>
                    <td>
                      <Badge bg="danger" className="px-3 py-2">
                        {item.fine}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {footnotes.map((note, idx) => (
              <p key={idx}>
                <BsCheckCircleFill className="text-info me-2" />
                {note}
              </p>
            ))}
          </Accordion.Body>
        </Accordion.Item>

        {/* Programs Section */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <BsCurrencyDollar className="me-2 text-success" />
            University Programs & Fee Structure
          </Accordion.Header>
          <Accordion.Body>
            <Form className="mb-3 d-flex gap-3">
              {["Morning", "Evening"].map((option) => (
                <Form.Check
                  key={option}
                  type="radio"
                  id={`radio-${option}`}
                  label={
                    <span className="fw-bold">
                      {option} <Badge bg="secondary">Shift</Badge>
                    </span>
                  }
                  name="shift"
                  value={option}
                  checked={shift === option}
                  onChange={(e) => setShift(e.target.value)}
                />
              ))}
            </Form>

            {programGroups.map((group, index) => {
              const fees = group.shiftFees[shift];
              return (
                <Card key={index} className="mb-4 shadow-lg border-0 rounded-3">
                  <Card.Header
                    className="text-white fw-bold"
                    style={{ background: "#036674" }}
                  >
                    {group.title}
                  </Card.Header>
                  <Card.Body>
                    <Table bordered hover responsive className="shadow-sm">
                      <thead className="table-primary text-dark">
                        <tr>
                          <th>#</th>
                          <th>Program Name</th>
                          <th colSpan={8} className="text-center">
                            Semester-wise Fee (Rs)
                          </th>
                        </tr>
                        <tr>
                          <th></th>
                          <th></th>
                          {[...Array(8)].map((_, i) => (
                            <th key={i}>{i + 1}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {group.programs.map((program, idx) => {
                          const semFees = [
                            fees.semester1Fee,
                            fees.semester2Fee,
                            fees.semester3Fee,
                            fees.semester4Fee,
                            fees.semester5Fee,
                            fees.semester6Fee,
                            fees.semester7Fee,
                            fees.semester8Fee,
                          ];
                          const total = semFees.reduce(
                            (acc, fee) => acc + Number(fee),
                            0
                          );
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td className="fw-semibold">{program}</td>
                              {semFees.map((fee, i) => (
                                <td key={i}>
                                  <Badge bg="light" text="dark">
                                    {fee}
                                  </Badge>
                                </td>
                              ))}
                              <td>
                                <Badge bg="success" className="px-3 py-2">
                                  Total: {total}
                                </Badge>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export { FeeRules };
