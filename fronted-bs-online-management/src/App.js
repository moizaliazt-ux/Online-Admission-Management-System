import React, { createContext, useEffect, useState } from "react";
import {
  BsProspectus,
  ConferenceCards,
  ExaminationBs,
  FeeRules,
  Footer,
  Header,
  MeritLists,
  TimeTableBs,
  AdmissionBs,
} from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Blog,
  ContactUs,
  DashboardForm,
  ForgotPasswordPage,
  LoginPage,
  MainPage,
  RegistrationForm,
  ResetPasswordPage,
} from "./pages";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProtectedRoute } from "./pages/utils";
import DepartmentSection from "./components/academics-menu/departments-section";
import Home from "./components/home/home";
import ChallanGenerate from "./pages/challan/challan-generate";  // ✅ only once
import RegisterStudent from "./pages/register/register";

// 🔹 Context
export const ActiveContext = createContext();

const App = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const value = { user, setUser };

  return (
    <ActiveContext.Provider value={value}>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          {/* 🌐 Public Pages */}
          <Route path="/" index element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/departments" element={<DepartmentSection />} />
          <Route path="/conferences" element={<ConferenceCards />} />
          <Route path="/bs-timetable" element={<TimeTableBs />} />

          {/* 🎓 BS admission routes */}
          <Route path="/bs-examinations" element={<ExaminationBs />} />
          <Route path="/bs-admission" element={<AdmissionBs />} />
          <Route path="/bs-prospectus" element={<BsProspectus />} />
          <Route path="/bs-fees" element={<FeeRules />} />
          <Route path="/merit-list" element={<MeritLists />} />
          <Route path="/challan" element={<ChallanGenerate />} /> {/* ✅ Correct route */}

          <Route path="/challangenerate" element={<ChallanGenerate />} /> {/* ✅ new route */}


          {/* 👤 Student Registration */}
          <Route path="/register-student" element={<RegisterStudent />} />

          {/* 📊 Dashboard (protected) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requireRegistered={false}>
                <DashboardForm />
              </ProtectedRoute>
            }
          />

          {/* 🔐 Authentication */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegistrationForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ActiveContext.Provider>
  );
};

export default App;
