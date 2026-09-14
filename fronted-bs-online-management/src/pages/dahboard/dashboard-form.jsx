import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../utils";
import { FormField } from "../../components/comon/form-field";
import { ActiveContext } from "../../App";
import "./dashboardform.css";
import { initialValues, validationSchema } from "./schema";

const DashboardForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(ActiveContext);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => formData.append(key, values[key]));

      const response = await API.post("/api/auth/admission", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        toast.success(response.data?.message);
        setUser((prev) => ({ ...prev, isRegistered: true }));
        navigate("/home");
      }
    } catch (err) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dashboard-form-container">
      <div className="dashboard-form-card">
        <h2 className="form-title">🎓 New Admission Application</h2>
        {/* <p className="form-subtitle">BS Online Program - GIGCCL</p> */}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Row>
                {/* Personal Information */}
                <h4 className="section-title">Personal Information</h4>

                <Col md={4}>
                  <FormField
                    name="fname"
                    label="First Name"
                    required
                    placeholder="Enter your first name"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="middleName"
                    label="Middle Name"
                    placeholder="Middle name (optional)"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="lname"
                    label="Last Name"
                    required
                    placeholder="Enter your last name"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="fatherName"
                    label="Father's Name"
                    required
                    placeholder="Enter father's name"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="cnic"
                    label="CNIC"
                    required
                    placeholder="00000-0000000-0"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="fCnic"
                    label="Father's CNIC"
                    placeholder="00000-0000000-0"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="gender"
                    label="Gender"
                    required
                    type="select"
                    options={[
                      { value: "", label: "select a option" },
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "transgender", label: "Transgender" },
                    ]}
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="dob"
                    label="Date of Birth"
                    required
                    type="date"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="phone"
                    label="Phone Number"
                    required
                    placeholder="+92 300 0000000"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="email"
                    label="Email"
                    required
                    type="email"
                    placeholder="student@example.com"
                  />
                </Col>
                {/* Passport Photo */}
                <Col md={6}>
                  <FormField
                    name="picture"
                    label="Upload Photo"
                    required
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setFieldValue("picture", e.currentTarget.files[0])
                    }
                  />
                </Col>

                {/* Address Information */}
                <h4 className="section-title">Address Information</h4>
                <Col md={12}>
                  <FormField
                    name="address1"
                    label="Address Line 1"
                    required
                    placeholder="House/flat number, street name"
                  />
                </Col>
                <Col md={12}>
                  <FormField
                    name="address2"
                    label="Address Line 2"
                    placeholder="Area, locality (optional)"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="city"
                    label="City"
                    required
                    placeholder="Enter city"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="state"
                    label="State/Province"
                    placeholder="Enter state/province"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="country"
                    label="Country"
                    required
                    placeholder="Select country"
                  />
                </Col>

                {/* Academic Information */}
                <h4 className="section-title">Academic Information</h4>

                <Col md={4}>
                  <FormField
                    name="qualification"
                    label="Previous Qualification"
                    required
                    type="select"
                    options={[
                      { value: "", label: "Select qualification" },
                      { value: "intermediate", label: "Intermediate" },
                      { value: "alevels", label: "A Levels" },
                      { value: "other", label: "Other" },
                    ]}
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="board"
                    label="Board/University"
                    required
                    placeholder="e.g., BISE Lahore"
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="meritScore"
                    label="Total Percentage"
                    required
                    maxLength={3}
                  />
                </Col>
                <Col md={4}>
                  <FormField
                    name="year"
                    label="Year of Passing"
                    required
                    placeholder="2025"
                  />
                </Col>

                {/* Program Selection */}
                <h4 className="section-title">Program Selection</h4>
                <Col md={6}>
                  <FormField
                    name="program"
                    label="Desired Program"
                    required
                    type="select"
                    options={[
                      { value: "", label: "Select program" },
                      { value: "bs_cs", label: "BS Computer Science" },
                      { value: "bs_economics", label: "BS Economics" },
                      { value: "bs_bba", label: "BS Business Administration" },
                      { value: "bs_psychology", label: "BS Psychology" },
                      { value: "bs_english", label: "BS English" },
                      { value: "bs_it", label: "BS IT" },
                      { value: "bs_science", label: "BS Science" },
                    ]}
                  />
                </Col>
                <Col md={6}>
                  <FormField
                    name="semester"
                    label="Select Semester"
                    required
                    type="select"
                    options={[
                      { value: "", label: "Select semester" },
                      { value: 1, label: "1st Semester" },
                      { value: 2, label: "2nd Semester" },
                      { value: 3, label: "3rd Semester" },
                      { value: 4, label: "4th Semester" },
                      { value: 5, label: "5th Semester" },
                      { value: 6, label: "6th Semester" },
                      { value: 7, label: "7th Semester" },
                      { value: 8, label: "8th Semester" },
                    ]}
                  />
                </Col>
                <Col md={6}>
                  <FormField
                    name="shift"
                    label="Preferred Shift"
                    required
                    type="select"
                    options={[
                      { value: "", label: "Select shift" },
                      { value: "morning", label: "Morning" },
                      { value: "evening", label: "Evening" },
                    ]}
                  />
                </Col>

                {/* Buttons */}
                <Col md={12} className="text-end mt-4">
                  <Button
                    variant="secondary"
                    type="reset"
                    size="lg"
                    className="me-3 reset-btn"
                  >
                    Reset Form
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="submit-btn"
                  >
                    {isSubmitting ? (
                      <Spinner animation="border" size="sm" className="me-2" />
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { DashboardForm };
