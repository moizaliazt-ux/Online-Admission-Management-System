import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkRouter } from "../comon";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DropdownMenu } from "./drop-down";
import { ActiveContext } from "../../App";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { user } = useContext(ActiveContext);
  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      style={{
        background: "linear-gradient(90deg, #024950, #036674, #048998)",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <Container>
        {/* ✅ Brand Logo */}
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <div className="d-flex align-items-center gap-3">
            <img
              src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
              alt="Logo"
              width="55px"
              height="55px"
              className="rounded-circle shadow-sm"
              style={{ border: "2px solid #fff" }}
            />
            <span className="fs-4 fw-bolder text-white tracking-wide">
              GICCL
            </span>
          </div>
        </Navbar.Brand>

        {/* ✅ Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* ✅ Navigation Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto d-flex align-items-center gap-4"
            onClick={handleNavClick}
          >
            <LinkRouter
              path="/home"
              title="Home"
              className="text-white fw-bold nav-link-hover"
            />
            {/* Admission Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontWeight: "600",
                }}
                id="dropdown-admission"
              >
                Admission ⬇
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/bs-admission">
                  🎓 BS Admission
                </Dropdown.Item>
                <NavDropdown.Item as={Link} to="/bs-prospectus">
                  📖 Prospectus
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bs-fees">
                  💰 Fee Structure
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/merit-list">
                  🏆 Merit List
                </NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* About */}
            <LinkRouter
              path="/about"
              title="About"
              className="text-white fw-bold nav-link-hover"
            />

            {/* Academics Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontWeight: "600",
                }}
                id="dropdown-academics"
              >
                Academics ⬇
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <LinkRouter
                    path="/departments"
                    title="🏫 Departments"
                    className="text-black fw-bold"
                  />
                </Dropdown.Item>

                <NavDropdown
                  title="📅 Time Table"
                  id="nav-dropdown"
                  className="px-2 fw-bold text-black"
                >
                  <NavDropdown.Item as={Link} to="/bs-timetable">
                    BS
                  </NavDropdown.Item>
                </NavDropdown>

                <Dropdown.Item>
                  <LinkRouter
                    path="/conferences"
                    title="🎤 Conferences"
                    className="text-black fw-bold"
                  />
                </Dropdown.Item>

                <NavDropdown
                  title="📝 Examinations"
                  id="nav-dropdown"
                  className="px-2 fw-bold text-black"
                >
                  <NavDropdown.Item as={Link} to="/bs-examinations">
                    BS
                  </NavDropdown.Item>
                </NavDropdown>
              </Dropdown.Menu>
            </Dropdown>

            {/* Contact Us */}
            <LinkRouter
              path="/contact-us"
              title="Contact Us"
              className="text-white fw-bold nav-link-hover"
            />

            {/* Profile Dropdown */}
            {user?.isRegistered && <DropdownMenu />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Header };
