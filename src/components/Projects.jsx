export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Some of my recent work and accomplishments</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/SMS_simple_UI.jpg" alt="SMS simple UI" />
            </div>
            <div className="project-content">
              <h3>Student Management System</h3>
              <p>
                A full-featured student management system with user
                authentication, course enrollment, and grade tracking. Built
                with HTML, Bootstrap 5, Python, and Django.
              </p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">Bootstrap 5</span>
                <span className="tag">Python</span>
                <span className="tag">Django</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/asimmagar20/Student-Management-System"
                  className="project-link"
                  title="View Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="https://github.com/asimmagar20/Student-Management-System"
                  className="project-link"
                  title="View Code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/Sajilo_Yatra_UI.png" alt="Sajilo Yatra UI" />
            </div>
            <div className="project-content">
              <h3>Sajilo Yatra</h3>
              <p>
                Helps anyone navigate Nepal&apos;s public transport. A project
                made on Sanकalpa organized by Whitehouse Innovators at Himalayan
                Whitehouse International College on 13th February, 2026. Built
                with React JS, Supabase, Node JS, and Rest API.
              </p>
              <div className="project-tags">
                <span className="tag">React JS</span>
                <span className="tag">Supabase</span>
                <span className="tag">Node JS</span>
                <span className="tag">Rest API</span>
              </div>
              <div className="project-links">
                <a
                  href="https://sajilo-yatraa.netlify.app/"
                  className="project-link"
                  title="View Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="https://github.com/asimmagar20/Sajilo-Yatra"
                  className="project-link"
                  title="View Code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="project-content">
              <h3>Analytics Dashboard</h3>
              <p>
                A powerful analytics platform for data visualization and
                business intelligence with real-time data processing and custom
                reports.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">D3.js</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">GraphQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link" title="View Project">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="#" className="project-link" title="View Code">
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-video"></i>
            </div>
            <div className="project-content">
              <h3>Video Streaming Platform</h3>
              <p>
                A scalable video streaming platform with adaptive bitrate, live
                streaming, and user engagement features. Served 100K+ concurrent
                users.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">HLS/DASH</span>
                <span className="tag">AWS</span>
                <span className="tag">Node.js</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link" title="View Project">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="#" className="project-link" title="View Code">
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <div className="project-content">
              <h3>SaaS Application</h3>
              <p>
                A complete SaaS platform with subscription management,
                multi-tenancy, and advanced analytics. Helping startups manage
                their operations.
              </p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">Stripe</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Vercel</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link" title="View Project">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="#" className="project-link" title="View Code">
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="project-content">
              <h3>Mobile App</h3>
              <p>
                A feature-rich mobile application for iOS and Android with
                offline support, push notifications, and seamless
                synchronization.
              </p>
              <div className="project-tags">
                <span className="tag">React Native</span>
                <span className="tag">Firebase</span>
                <span className="tag">Redux</span>
                <span className="tag">Expo</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link" title="View Project">
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a href="#" className="project-link" title="View Code">
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
