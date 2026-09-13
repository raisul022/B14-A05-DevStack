import bannerImage from '../assets/banner-stack.png';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-label">BUILD YOUR PERFECT STACK</p>

          <h1 className="hero-title">
            Build Your
            <span className="gradient-text"> Perfect Development Stack</span>
          </h1>

          <p className="hero-description">
            Discover the right technologies for your projects and create
            a development stack that matches your goals.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="gradient-button hero-button">
              Explore Technologies
            </a>

            <a href="#about" className="outline-button hero-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={bannerImage}
            alt="Development stack illustration"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;