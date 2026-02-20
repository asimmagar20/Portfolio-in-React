export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <p>Professional journey and key roles</p>
        </div>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="card-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3 className="card-title">
              Junior Digital Technology &amp; Software Developer
            </h3>
            <p className="card-company">EasyMy Learning Pvt Ltd</p>
            <p className="card-period">Jul 2024 – May 2025</p>
            <p className="card-description">
              Internship focusing on WordPress development, Canva-based design,
              and supporting educational technology projects.
            </p>
            <div className="card-skills">
              <span className="skill-badge">Python</span>
              <span className="skill-badge">Django</span>
              <span className="skill-badge">WordPress</span>
              <span className="skill-badge">Canva</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="card-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3 className="card-title">Chief Designer of Tech Newsletter</h3>
            <p className="card-company">Xavier Computer &amp; Coding Club</p>
            <p className="card-period">Sep 2025 – Present</p>
            <p className="card-description">
              Led design efforts for TechByte Thursday newsletter, creating
              engaging graphics and layouts for tech-related content.
            </p>
            <div className="card-skills">
              <span className="skill-badge">Graphic Design</span>
              <span className="skill-badge">Canva</span>
              <span className="skill-badge">Video Editing</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="card-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="card-title">IT Head</h3>
            <p className="card-company">Xavier Computer &amp; Coding Club</p>
            <p className="card-period">Jul 2025 – Present</p>
            <p className="card-description">
              Managed IT operations, supported workshops, and coordinated
              technology activities for the college club.
            </p>
            <div className="card-skills">
              <span className="skill-badge">IT Management</span>
              <span className="skill-badge">Workshops</span>
              <span className="skill-badge">Tech Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
