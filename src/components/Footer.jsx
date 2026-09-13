function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="brand-icon">DS</span>
            <span>Dev Stack</span>
          </a>

          <p>
            Build your perfect development stack with the right
            technologies for your projects and goals.
          </p>

          <div className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#home">Features</a>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#home">Careers</a>
          </div>

          <div>
            <h3>Legal</h3>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;