function Header() {
  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            🚚 Dubai Van Movers
          </div>
        </div>
      </header>

      <div className="floating-buttons">
        <a
          href="tel:+971501234567"
          className="call-button"
        >
          📞 Call Now
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=971501234567"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-button"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}

export default Header;