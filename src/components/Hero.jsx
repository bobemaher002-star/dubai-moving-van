function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">

        <div className="hero-content">

          <span className="hero-badge">
            Dubai • Sharjah • Ajman
          </span>

          <h1>
            Reliable & Cheap Moving Van in Dubai
          </h1>

          <p>
            Professional cargo van service for
            home shifting, office moving,
            furniture transport and same day delivery.
          </p>

          <div className="hero-buttons">

            <a
              href="#booking"
              className="primary-btn"
            >
              Get Free Quote
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=971501234567"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              WhatsApp Now
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h3>24/7</h3>
              <span>Available</span>
            </div>

            <div>
              <h3>1000+</h3>
              <span>Moves Done</span>
            </div>

            <div>
              <h3>UAE</h3>
              <span>Coverage</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200"
            alt="Moving Van Dubai"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;