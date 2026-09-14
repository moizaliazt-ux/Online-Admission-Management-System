import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

// Quick Actions (2nd version)
const quickActionsMain = [
  {
    title: "New Admission",
    desc: "Submit your application for BS programs",
    icon: "➕",
    to: "/bs-admission",
    theme: "blue",
  },
  {
    title: "BS Programs",
    desc: "Explore 50+ undergraduate programs with fee structure",
    icon: "📘",
    to: "/bs-prospectus",
    theme: "green",
  },
  {
    title: "Merit List",
    desc: "View admission merit lists and download",
    icon: "🏅",
    to: "/merit-list",
    theme: "yellow",
  },
  {
    title: "Examinations",
    desc: "Check exam dates and guidelines",
    icon: "📅",
    to: "/bs-examinations",
    theme: "purple",
  },
];

// Quick Actions (1st version - for bottom section)
const quickActionsBottom = [
  // {
  //   title: "Register Student",
  //   desc: "Add new student information to the system",
  //   icon: "👤",
  //   to: "/register-student",
  //   theme: "blue",
  // },
  {
    title: "Generate Challan",
    desc: "Create fee challans for students",
    icon: "💳",
    to: "/challangenerate", // ✅ updated path
    theme: "green",
  },
];

// Recent Activities (1st version)
const recentActivities = [
  {
    title: "New admission applications",
    desc: "0 applications pending review",
    status: "Up to Date",
    theme: "yellow",
  },
  {
    title: "Merit list updated",
    desc: "BS Computer Science rankings",
    status: "Completed",
    theme: "green",
  },
  {
    title: "Fee challans generated",
    desc: "0 challans generated recently",
    status: "No Recent Activity",
    theme: "blue",
  },
];

// Announcements + Dates (2nd version)
const latestAnnouncements = [
  {
    title: "Spring 2025 Admissions Open",
    desc: "Applications are now being accepted for all BS programs",
    date: "March 1, 2025",
    urgent: true,
  },
  {
    title: "Mid-Term Exams Approaching",
    desc: "Mid-term examinations scheduled for April 15-25, 2025",
    date: "April 15, 2025",
    urgent: true,
  },
  {
    title: "Merit List Publication",
    desc: "First merit list will be published on March 25, 2025",
    date: "March 25, 2025",
  },
  {
    title: "Fee Submission Deadline",
    desc: "Last date for fee submission is April 5, 2025",
    date: "April 5, 2025",
  },
];

const importantDates = [
  { title: "Application Deadline", date: "March 15", theme: "blue" },
  { title: "Merit List", date: "March 25", theme: "green" },
  { title: "Mid-Term Exams", date: "April 15-25", theme: "purple" },
  { title: "Final Exams", date: "June 10-25", theme: "yellow" },
];

const Home = () => {
  return (
    <main className="home">
      {/* Hero / Header */}
      <section className="hero card">
        <div>
          <div>
            <img
              src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
              alt="GIGCCL Logo"
              className="hero-logo"
            />
          </div>
          <div className="hero-text">
            <h1>Welcome to GIGCCL</h1>
            <p className="subtitle">
              Government Islamia Graduate College for Commerce Lahore — Student
              Portal
            </p>
            <p className="tagline">
              Your gateway to quality higher education and academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions (Main) */}
      <h2 className="section-title">Quick Actions</h2>
      <section className="qa-grid">
        {quickActionsMain.map((a) => (
          <Link key={a.title} to={a.to} className={`qa card qa--${a.theme}`}>
            <div className={`qa-icon qa-icon--${a.theme}`}>{a.icon}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <span className="qa-cta">Get Started →</span>
          </Link>
        ))}
      </section>

      {/* Announcements + Important Dates */}
      <section className="two-col">
        {/* Announcements */}
        <div className="card">
          <div className="card-head">
            <h2>🔔 Latest Announcements</h2>
            <p className="muted">Important updates and notifications</p>
          </div>
          {latestAnnouncements.map((ann) => (
            <div
              key={ann.title}
              className={`ann ${ann.urgent ? "ann--urgent" : "ann--normal"}`}
            >
              <div className="ann-body">
                <h3>{ann.title}</h3>
                <p>{ann.desc}</p>
                <span className="date">📅 {ann.date}</span>
              </div>
              {ann.urgent && <span className="badge">Urgent</span>}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="card">
          <div className="card-head">
            <h2>📅 Important Dates</h2>
            <p className="muted">Academic calendar highlights</p>
          </div>
          <div className="dates">
            {importantDates.map((d) => (
              <div key={d.title} className={`date-row date-row--${d.theme}`}>
                <div className="date-title">
                  <span className={`dot dot--${d.theme}`} />
                  {d.title}
                </div>
                <span className={`pill pill--${d.theme}`}>{d.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="card about-card">
        <h2>📘 About GIGCCL</h2>
        <p>
          Government Islamia Graduate College for Commerce Lahore has been a
          beacon of educational excellence for over 75 years, providing quality
          higher education and shaping future leaders.
        </p>
        <div className="about-stats">
          <div>
            <strong>50+</strong>
            <span>Programs</span>
          </div>
          <div>
            <strong>15K+</strong>
            <span>Students</span>
          </div>
          <div>
            <strong>75+</strong>
            <span>Years</span>
          </div>
        </div>
        <Link to="/about" className="learn-more-btn">
          Learn More About GIGCCL
        </Link>
      </section>

      {/* Recent Activities + Bottom Quick Actions */}
      <section className="two-col">
        {/* Recent Activities */}
        <div className="card">
          <h3 className="section-title">Recent Activities</h3>
          {recentActivities.map((a) => (
            <div key={a.title} className={`date-row date-row--${a.theme}`}>
              <div className="date-title">{a.title}</div>
              <span className={`pill pill--${a.theme}`}>{a.status}</span>
            </div>
          ))}
        </div>

        {/* Quick Actions (Bottom) */}
        <div className="card">
          <h3 className="section-title">Quick Actions</h3>
          <div className="qa-grid">
            {quickActionsBottom.map((a) => (
              <Link key={a.title} to={a.to} className={`qa qa--${a.theme}`}>
                <div className={`qa-icon qa-icon--${a.theme}`}>{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
