import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./challan-generate.css";

const ChallanGenerate = () => {
  const [cnic, setCnic] = useState("");
  const [semester, setSemester] = useState("");
  const [challan, setChallan] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/challan/generate",
        {
          cnic,
          semester,
        }
      );
      setChallan(res.data);
      setError("");
      setCnic("");
      setSemester("");
    } catch (err) {
      setError(err.response?.data?.message || "❌ Student not found");
      setChallan(null);
    }
  };

  const handleDownload = async () => {
    const challanElement = document.getElementById("challan-preview");
    const canvas = await html2canvas(challanElement);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save(`challan-${challan.rollNo}.pdf`);
  };

  return (
    <div className="container py-5">
      <h1 className="title">Generate Fee Challan</h1>
      <p className="subtitle">Search student by CNIC</p>
      <div className="d-flex" style={{ gap: "10px" }}>
        <form className="form-wrapper" onSubmit={handleSearch}>
          <div className="form-box">
            <h2 className="text-muted">👤 Student Search</h2>

            <label>Enter CNIC</label>
            <input
              type="text"
              placeholder="Enter CNIC"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
            />

            <label>Select Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            >
              <option value="">Select Semester</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" className="generate-btn">
              Search
            </button>
          </div>
        </form>

        <div className="preview-box">
          <h2 className="form-title">Challan Preview</h2>

          {challan ? (
            <div>
              <div id="challan-preview" className="challan">
                <h3>{challan.bank}</h3>
                <p className="title">
                  Govt. Islamia Graduate College Civil Lines, Lahore
                </p>
                <p className="subtitle">
                  Govt. Central Model School Br. LHR (172)
                </p>

                <div className="details">
                  <p>
                    <strong>Bank Challan No:</strong> {challan.bankChallanNo}
                  </p>
                  <p>
                    <strong>Date:</strong> {challan.date}
                  </p>
                  <p>
                    <strong>Name:</strong> {challan.studentName}
                  </p>
                  <p>
                    <strong>Father's Name:</strong> {challan.fatherName}
                  </p>
                  <p>
                    <strong>Roll No:</strong> {challan.rollNo}
                  </p>
                  <p>
                    <strong>Semester:</strong> {challan.semester}
                  </p>
                  <p>
                    <strong>Session:</strong> {challan.session}
                  </p>
                  <p>
                    <strong>Shift:</strong> {challan.shift}
                  </p>
                </div>

                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Particulars</th>
                      <th>Amount (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {challan.fee.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.amount}</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="2">Total</td>
                      <td>{challan.totalFee}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="signature-section">
                  <p>Bank Officer: ____________________</p>
                  <p>College Cashier: ____________________</p>
                </div>
              </div>

              <button
                type="button"
                className="download-btn"
                onClick={handleDownload}
              >
                📥 Download Challan
              </button>
            </div>
          ) : (
            <div className="preview-placeholder">
              Search by CNIC & Semester to generate challan
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallanGenerate;
