import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          
          {/* LOGO */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/logo.png" alt="MHI Logo" />
            
            <div className="logo-text">
              <span className="logo-title">MHI APP</span>
              <span className="logo-sub">Ma’anil Hadis Insight</span>
            </div>
          </Link>

          {/* MENU */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/bookmark" onClick={closeMenu}>
              Bookmark
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              Tentang Kami
            </NavLink>
          </div>

          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        </div>
      </nav>

      {/* BACKDROP (klik luar sidebar) */}
      <div
        className={`backdrop ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
}

export default Navbar;