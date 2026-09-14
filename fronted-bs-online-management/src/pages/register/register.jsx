import React, { useState, useEffect } from "react";
import "./register.css";

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fullName: "",
    fatherName: "",
    cnic: "",
    phone: "",
    email: "",
    rollNumber: "",
    registrationNumber: "",
    currentSemester: "",
    program: "",
    shift: "",
    academicYear: "",
  });

  // Auto-generate full name
  useEffect(() => {
    const { firstName, middleName, lastName } = formData;
    const fullName = [firstName, middleName, lastName].filter(Boolean).join(" ");
    setFormData((prev) => ({ ...prev, fullName }));
  }, [formData.firstName, formData.middleName, formData.lastName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Registered:", formData);
    alert("✅ Student registered successfully!");
  };

  return (
    <main className="register-page">
      <div className="form-card">
        <h2 className="form-title">Other Semesters</h2>
        {/* <p className="form-subtitle">
          Register continuing students for semester enrollment
        </p> */}

        <form onSubmit={handleSubmit} className="grid-form">
          {/* First Row */}
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
            />
          </div>

          <div className="form-group">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Middle name (optional)"
            />
          </div>

          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
            />
          </div>

          {/* Full Name + Father */}
          <div className="form-group full-width">
            <label>Full Name (Auto-generate)</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              disabled
              placeholder="Auto-generated from above fields"
            />
          </div>

          <div className="form-group full-width">
            <label>Father's Name *</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's name"
              required
            />
          </div>

          {/* CNIC + Phone + Email */}
          <div className="form-group">
            <label>CNIC *</label>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              placeholder="00000-0000000-0"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 0000000"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="student@example.com"
              required
            />
          </div>

          {/* Roll / Reg / Semester */}
          <div className="form-group">
            <label>Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="Optional - if available"
            />
          </div>

          <div className="form-group">
            <label>Registration Number *</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              placeholder="e.g., GI-2023-CS-001"
              required
            />
          </div>

          <div className="form-group">
            <label>Current Semester *</label>
            <select
              name="currentSemester"
              value={formData.currentSemester}
              onChange={handleChange}
              required
            >
              <option value="">Select semester</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Semester
                </option>
              ))}
            </select>
          </div>

          {/* Program / Shift / Year */}
          <div className="form-group">
            <label>Program *</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >
              <option value="">Select program</option>
              <option value="BSCS">BS Computer Science</option>
              <option value="BBA">BBA</option>
              <option value="BS English">BS English</option>
              <option value="BS Commerce">BS Commerce</option>
            </select>
          </div>

          <div className="form-group">
            <label>Shift *</label>
            <select
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              required
            >
              <option value="">Select shift</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          <div className="form-group">
            <label>Academic Year *</label>
            <input
              type="text"
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              placeholder="e.g., 2023-2024"
              required
            />
          </div>
        </form>

        <div className="form-actions">
          <button type="button" className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Register Student
          </button>
        </div>
      </div>
    </main>
  );
};

export default RegisterStudent;
