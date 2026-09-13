function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">
          <span className="brand-icon">DS</span>
          <span>Dev Stack</span>
        </a>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="navbar-actions">
          <a href="#signin" className="sign-in">
            Sign In
          </a>

          <a href="#signup" className="sign-up">
            Sign Up
          </a>
        </div>

        <button className="menu-button" aria-label="Open menu">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;