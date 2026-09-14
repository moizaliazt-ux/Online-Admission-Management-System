import React, { useState, useContext, useMemo } from "react";
import { Dropdown } from "react-bootstrap";
import { ActiveContext } from "../../App";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(ActiveContext);

  // Generate initials if no image
  const initials = useMemo(() => {
    if (!user?.name) return "";
    const parts = user.name.trim().split(/\s+/);
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [user]);

  const handleLogout = () => {
    localStorage.clear("user");
    setUser(null);
    navigate("/");
  };

  return (
    <Dropdown
      show={show}
      onToggle={() => setShow(!show)}
      className="drop_down_icon"
    >
      <Dropdown.Toggle
        as="span"
        style={{
          cursor: "pointer",
          display: "inline-block",
        }}
        className="dropdown-toggle"
      >
        {/* ✅ Show user image OR initials */}
        {user?.image ? (
          <img
            src={user.image}
            alt="Profile"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #ff69b4",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div
            style={{
              width: "40px",
              height: "40px",
              fontSize: "14px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #3b0a45, #ff69b4)",
              color: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            {initials}
          </div>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu
        align="end"
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
          padding: "0",
          minWidth: "160px",
        }}
      >
        <div
          style={{
            padding: "12px",
            background: "linear-gradient(135deg,#ff69b4,#8e44ad)",
            color: "white",
            textAlign: "center",
          }}
        >
          <strong>{user?.name || "Guest User"}</strong>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            {user?.email || "No email"}
          </div>
        </div>
        <Dropdown.Item
          onClick={handleLogout}
          style={{
            padding: "10px 15px",
            fontWeight: "bold",
            color: "#333",
            transition: "all 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#f8f9fa";
            e.currentTarget.style.color = "#ff69b4";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#333";
          }}
        >
          🚪 Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { DropdownMenu };
