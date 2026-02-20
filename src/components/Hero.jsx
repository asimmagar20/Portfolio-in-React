export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-circle" style={{ fontSize: "0.6rem" }}></i>
            Welcome to My Portfolio
          </div>
          <h1 className="hero-title">
            Hey! I'm <span className="gradient-text">Asim Pun Magar</span>
          </h1>
          {/* This element is used by the looping typewriter effect */}
          <h1 className="hero-subtitle">
            Junior Digital Technology &amp; Software Developer | Python, Django,
            WordPress
          </h1>
          <p className="hero-description">
            Passionate software developer with hands-on experience in Python,
            Django, and WordPress. Skilled in building digital solutions,
            creating user-friendly interfaces, and supporting educational
            technology initiatives. Always eager to learn, innovate, and
            contribute to impactful projects.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-arrow-right"></i>
              Start Project
            </a>
            <a href="#projects" className="btn btn-secondary">
              <i className="fas fa-briefcase"></i>
              View Work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-container">
            <div className="profile-glow"></div>
            <div className="profile-image">
              <img
                src="/profile-asim.jpg"
                alt="Asim Pun Magar"
                className="profile-pic"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
