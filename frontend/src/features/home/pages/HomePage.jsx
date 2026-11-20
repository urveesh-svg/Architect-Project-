import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Navbar
      <nav className="navbar">
        <h2 className="logo">ARCH<span>BUILD</span></h2>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <a href="/contact" className="nav-btn">Get In Touch</a>
      </nav> */}

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="hero-tag">BUILDING THE FUTURE</p>

          <h1>
            WE BUILD
            <br />
            <span>YOUR DREAMS</span>
            <br />
            INTO REALITY
          </h1>

          <p className="hero-description">
            We create modern architecture and deliver high-quality
            construction solutions with innovation, creativity and trust.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="primary-btn">
              Explore Projects
            </a>

            <a href="/contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2>120+</h2>
            <p>Projects Completed</p>
          </div>

          <div>
            <h2>80+</h2>
            <p>Happy Clients</p>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section className="services-section">

        <div className="section-heading">
          <p>WHAT WE DO</p>
          <h2>Our <span>Services</span></h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">⌂</div>
            <h3>Architecture Design</h3>
            <p>
              Creative and modern architectural designs for
              residential and commercial spaces.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">▦</div>
            <h3>Building Construction</h3>
            <p>
              High-quality construction services with
              professional planning and execution.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>Interior Design</h3>
            <p>
              Beautiful and functional interiors designed
              according to your lifestyle.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>ARCH<span>BUILD</span></h2>
        <p>Building Tomorrow, Today.</p>
        <p>© 2026 ARCHBUILD. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
