export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="logo-text">Asim.</div>
        </a>

        <div className="nav-links" id="navLinks">
          <a href="#about" className="nav-link active">
            About
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#expertise" className="nav-link">
            Expertise
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        <div className="nav-right">
          <button
            className="theme-toggle"
            id="themeToggle"
            title="Toggle theme (T)"
          >
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun" style={{ display: "none" }}></i>
          </button>
          <a href="#contact" className="cta-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
