import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ps-1 pe-1 ps-lg-5 pe-lg-5 ps-md-5 pe-md-5 ${menuOpen ? 'navbar-open' : ''}`}>
      <Link to="/" className="navbar-brand">
        <img
          src="/images/ay-akademi-logo.png"
          alt="ay akademi logo"
          className="logo"
          style={{ width: '85px', height: 'auto' }}
        />
      </Link>

      <button
        className={`navbar-toggler ${menuOpen ? 'collapsed' : ''}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto gap-lg-5 gap-md-2 gap-2">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Anasayfa
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/hakkimizda' ? 'active' : ''}`}>
            <Link to="/hakkimizda" className="nav-link" onClick={toggleMenu}>
              Hakkımızda
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/iletisim' ? 'active' : ''}`}>
            <Link to="/iletisim" className="nav-link" onClick={toggleMenu}>
              İletişim
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/kurslar' ? 'active' : ''}`}>
            <Link to="/kurslar" className="nav-link" onClick={toggleMenu}>
              Ders Videoları
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
