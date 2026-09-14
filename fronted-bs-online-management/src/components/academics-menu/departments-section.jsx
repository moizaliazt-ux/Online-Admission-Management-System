import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { BookOpen, Clock, Users, FlaskConical, Calculator, Palette, Briefcase } from "lucide-react";
import "./department.css";

export default function DepartmentSection() {
  return (
    <section className="department-section">
      {/* Science Department */}
      <h2>Science Programs</h2>
      <div className="program-grid">
        <div className="program-card science">
          <h3 className="program-title">
            <BookOpen className="icon" /> BS Computer Science
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 4 Years</span>
            <span className="badge"><Users className="icon-sm" /> 120 Seats</span>
          </div>
          <p className="program-desc">Modern curriculum with AI, Data Science, and Software Engineering.</p>
          <p><strong>Eligibility:</strong> F.Sc (Pre-Engineering) or equivalent with min 50% marks</p>
          <p><strong>Career Opportunities:</strong> Software Engineer, Data Scientist, AI Specialist, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>

        <div className="program-card science">
          <h3 className="program-title">
            <Calculator className="icon" /> BS Mathematics
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 4 Years</span>
            <span className="badge"><Users className="icon-sm" /> 50 Seats</span>
          </div>
          <p className="program-desc">Advanced mathematics, statistics, and computational methods.</p>
          <p><strong>Eligibility:</strong> F.A/F.Sc (Pre-Engineering/Pre-Medical) with min 50% marks</p>
          <p><strong>Career Opportunities:</strong> Mathematics Teacher, Statistician, Data Analyst, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>

        <div className="program-card science">
          <h3 className="program-title">
            <FlaskConical className="icon" /> BS Chemistry
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 4 Years</span>
            <span className="badge"><Users className="icon-sm" /> 60 Seats</span>
          </div>
          <p className="program-desc">Focus on organic, inorganic, and physical chemistry research.</p>
          <p><strong>Eligibility:</strong> F.Sc (Pre-Medical/Pre-Engineering) with min 50% marks</p>
          <p><strong>Career Opportunities:</strong> Lab Chemist, Researcher, Lecturer, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>
      </div>

      {/* Arts Department */}
      <h2>Arts Programs</h2>
      <div className="program-grid">
        <div className="program-card arts">
          <h3 className="program-title">
            <Palette className="icon" /> BA Fine Arts
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 4 Years</span>
            <span className="badge"><Users className="icon-sm" /> 40 Seats</span>
          </div>
          <p className="program-desc">Creative arts, design, and visual expression.</p>
          <p><strong>Eligibility:</strong> F.A or equivalent with min 45% marks</p>
          <p><strong>Career Opportunities:</strong> Designer, Illustrator, Art Teacher, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>

        <div className="program-card arts">
          <h3 className="program-title">
            <BookOpen className="icon" /> BA English Literature
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 4 Years</span>
            <span className="badge"><Users className="icon-sm" /> 70 Seats</span>
          </div>
          <p className="program-desc">Study of classical and modern English literature.</p>
          <p><strong>Eligibility:</strong> F.A/F.Sc or equivalent with min 45% marks</p>
          <p><strong>Career Opportunities:</strong> Writer, Lecturer, Journalist, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>

        <div className="program-card arts">
          <h3 className="program-title">
            <BookOpen className="icon" /> BA History
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 4 Years</span>
            <span className="badge"><Users className="icon-sm" /> 55 Seats</span>
          </div>
          <p className="program-desc">Study of world civilizations, culture, and history.</p>
          <p><strong>Eligibility:</strong> F.A or equivalent with min 45% marks</p>
          <p><strong>Career Opportunities:</strong> Historian, Archivist, Researcher, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>
      </div>

      {/* Commerce Department */}
      <h2>Commerce Programs</h2>
      <div className="program-grid">
        <div className="program-card commerce">
          <h3 className="program-title">
            <Briefcase className="icon" /> BBA
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 4 Years</span>
            <span className="badge"><Users className="icon-sm" /> 100 Seats</span>
          </div>
          <p className="program-desc">Business Administration with Finance, HR, and Marketing.</p>
          <p><strong>Eligibility:</strong> F.A/F.Sc/I.Com with min 50% marks</p>
          <p><strong>Career Opportunities:</strong> Manager, HR Officer, Marketing Specialist, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>

        <div className="program-card commerce">
          <h3 className="program-title">
            <Calculator className="icon" /> B.Com
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 2 Years</span>
            <span className="badge"><Users className="icon-sm" /> 80 Seats</span>
          </div>
          <p className="program-desc">Commerce and accounting fundamentals.</p>
          <p><strong>Eligibility:</strong> I.Com/F.A with min 50% marks</p>
          <p><strong>Career Opportunities:</strong> Accountant, Auditor, Banker, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>

        <div className="program-card commerce">
          <h3 className="program-title">
            <BookOpen className="icon" /> BS Economics
          </h3>
          <div className="badge-group">
            <span className="badge"><Clock className="icon-sm" /> 4 Years</span>
            <span className="badge"><Users className="icon-sm" /> 90 Seats</span>
          </div>
          <p className="program-desc">Economic theory, econometrics, and policy studies.</p>
          <p><strong>Eligibility:</strong> F.A/F.Sc/I.Com with min 50% marks</p>
          <p><strong>Career Opportunities:</strong> Economist, Policy Analyst, Researcher, +2 more</p>
          <div className="btn-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline">Prospectus</button>
          </div>
        </div>
      </div>
    </section>
  );
}
