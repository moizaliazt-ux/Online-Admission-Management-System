// src/components/academics-menu/examination-bs.jsx
import React, { useState } from "react";
import "./examination.css";

const ExaminationBs = () => {
  const [selectedHall, setSelectedHall] = useState(null);

  // Mock stats data
  const hallStats = {
    "Main Campus - Hall A": [
      { department: "BS Computer Science", day: "Mon", date: "20 June 2025", paper: "Data Structures" },
      { department: "BS Software Eng", day: "Tue", date: "21 June 2025", paper: "Operating Systems" },
    ],
    "Main Campus - Hall B": [
      { department: "BS IT", day: "Wed", date: "22 June 2025", paper: "Database Systems" },
      { department: "BS Math", day: "Thu", date: "23 June 2025", paper: "Discrete Mathematics" },
    ],
    "City Campus - Hall C": [
      { department: "BS Physics", day: "Fri", date: "24 June 2025", paper: "Quantum Mechanics" },
    ],
    "North Campus - Lab 01": [
      { department: "BS Electronics", day: "Sat", date: "25 June 2025", paper: "Circuit Analysis" },
    ],
  };

  return (
    <div className="exam-section">
      <h1 className="exam-heading">Examination Panel (BS)</h1>

      {/* Mid Term Schedule */}
      <div className="exam-card">
        <h2 className="exam-subheading">📘 Mid-Term Examination Schedule</h2>
        <table className="exam-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Teacher</th>
              <th>Department</th>
              <th>Batch</th>
              <th>Date</th>
              <th>Time</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BSCS-301</td>
              <td>Data Structures</td>
              <td>Dr. Ahmed</td>
              <td>BSCS</td>
              <td>2022</td>
              <td>10 March</td>
              <td>10:00 AM</td>
              <td>Lab-01</td>
            </tr>
            <tr>
              <td>BSCS-302</td>
              <td>Database Systems</td>
              <td>Prof. Khan</td>
              <td>BSCS</td>
              <td>2022</td>
              <td>12 March</td>
              <td>12:30 PM</td>
              <td>Room-205</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Final Term Schedule */}
      <div className="exam-card">
        <h2 className="exam-subheading">📕 Final-Term Examination Schedule</h2>
        <table className="exam-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Teacher</th>
              <th>Department</th>
              <th>Batch</th>
              <th>Date</th>
              <th>Time</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BSCS-303</td>
              <td>Operating Systems</td>
              <td>Dr. Fatima</td>
              <td>BSCS</td>
              <td>2021</td>
              <td>20 June</td>
              <td>9:00 AM</td>
              <td>Hall-A</td>
            </tr>
            <tr>
              <td>BSCS-304</td>
              <td>Computer Networks</td>
              <td>Sir Imran</td>
              <td>BSCS</td>
              <td>2021</td>
              <td>22 June</td>
              <td>2:00 PM</td>
              <td>Hall-B</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examination Centers */}
      <div className="exam-card">
        <h2 className="exam-subheading">🏫 Examination Centers</h2>
        <div className="exam-centers">
          {Object.keys(hallStats).map((hall) => (
            <button
              key={hall}
              className="exam-center-card"
              onClick={() => setSelectedHall(hall)}
            >
              {hall}
            </button>
          ))}
        </div>
      </div>

      {/* Popup for Hall Stats */}
      {selectedHall && (
        <div className="exam-modal">
          <div className="exam-modal-content">
            <h3>{selectedHall} - Student Statistics</h3>
            <table className="exam-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Paper</th>
                </tr>
              </thead>
              <tbody>
                {hallStats[selectedHall].map((item, i) => (
                  <tr key={i}>
                    <td>{item.department}</td>
                    <td>{item.day}</td>
                    <td>{item.date}</td>
                    <td>{item.paper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="close-btn" onClick={() => setSelectedHall(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Rules & Quick Links */}
      <div className="exam-card exam-rules">
        <h2 className="exam-subheading">⚠️ Rules & Guidelines</h2>
        <ul>
          <li>Bring your University ID card.</li>
          <li>Mobile phones are strictly prohibited.</li>
          <li>Arrive at least 15 minutes early.</li>
          <li>Follow seating arrangements strictly.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExaminationBs;
