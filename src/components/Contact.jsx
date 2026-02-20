export default function Contact() {
  const handleCopyEmail = (e, email) => {
    e.preventDefault();
    if (window.copyToClipboard) window.copyToClipboard(email);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Let&apos;s Work Together</h2>
          <p>Get in touch and start building something amazing</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <p className="contact-label">Email</p>
            <p className="contact-value">
              <a
                href="mailto:asimmagar20@gmail.com"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={(e) => handleCopyEmail(e, "asimmagar20@gmail.com")}
              >
                asimmagar20@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <p className="contact-label">Phone</p>
            <a href="tel:+977 9767224983" className="contact-value">
              +977 9767224983
            </a>
          </div>

          <div className="contact-info">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p className="contact-label">Location</p>
            <p className="contact-value">Kathmandu, Nepal</p>
          </div>

          <div className="contact-info">
            <div className="contact-icon">
              <i className="fas fa-clock"></i>
            </div>
            <p className="contact-label">Response Time</p>
            <p className="contact-value">Usually within 24 hours</p>
          </div>
        </div>

        <div className="cta-cards">
          <div className="cta-card">
            <div className="cta-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Hire Me</h3>
            <p>
              Looking for a skilled developer or designer for your next project?
            </p>
            <a
              href="mailto:asimpunmagar@gmail.com"
              className="btn btn-primary btn-animate"
            >
              <i className="fas fa-paper-plane"></i>
              Send Proposal
            </a>
          </div>

          <div className="cta-card">
            <div className="cta-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Collaborate</h3>
            <p>Interested in partnership or collaboration opportunities?</p>
            <a
              href="https://www.linkedin.com/in/asim-pun-magar-006922309/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-animate"
            >
              <i className="fas fa-comments"></i>
              Let&apos;s Discuss
            </a>
          </div>

          <div className="cta-card">
            <div className="cta-icon">
              <i className="fas fa-download"></i>
            </div>
            <h3>Download CV</h3>
            <p>Get my full resume and qualifications in one PDF file.</p>
            <a
              href="/Asim_Pun_Magar_Resume.txt"
              download="Asim_Pun_Magar_Resume.txt"
              className="btn btn-primary btn-animate"
            >
              <i className="fas fa-file-download"></i>
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
