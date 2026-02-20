export default function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      <div className="container">
        <div className="section-header">
          <h2>Technical Expertise &amp; Skills</h2>
          <p>Technologies and tools I specialize in</p>
        </div>

        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Frontend Development</h3>
            <p>
              Building responsive and interactive web applications using modern
              frameworks.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">WordPress</span>
              <span className="tech-badge">React JS</span>
            </div>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Backend Development</h3>
            <p>
              Developing web apps and APIs using Python and Django for scalable
              solutions.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Django</span>
            </div>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <h3>UI/UX Design &amp; Tools</h3>
            <p>
              Creating visually appealing and intuitive interfaces using Canva
              and design principles.
            </p>
            <div className="tech-stack">
              <span className="tech-badge">Canva</span>
              <span className="tech-badge">Graphic Design</span>
              <span className="tech-badge">Video Editing</span>
              <span className="tech-badge">Figma</span>
            </div>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Other Skills</h3>
            <p>Additional skills acquired and interests.</p>
            <div className="tech-stack">
              <span className="tech-badge">Cricket</span>
              <span className="tech-badge">Chess</span>
              <span className="tech-badge">Collaboration</span>
              <span className="tech-badge">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
