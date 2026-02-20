export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>
            Building scalable, user-focused digital solutions for education and
            web development.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Fast &amp; Efficient</h3>
            <p>
              Delivering clean, maintainable code and high-performance digital
              solutions.
            </p>
          </div>
          <div className="about-card">
            <div className="about-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Reliable &amp; Secure</h3>
            <p>
              Following secure development practices while ensuring project
              reliability and stability.
            </p>
          </div>
          <div className="about-card">
            <div className="about-icon">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <h3>Creative &amp; Collaborative</h3>
            <p>
              Combining UI/UX design, Canva graphics, and video editing for
              educational and web projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
