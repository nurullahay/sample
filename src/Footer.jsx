import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-1">
            <h4>Ziyaret et</h4>
            <ul>
              <li><Link to="/">Anasayfa</Link></li>
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
              <li><Link to="/kurslar">Kurslar</Link></li>
            </ul>
          </div>
          <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-4 mt-xl-1 mt-lg-1 mt-md-1 mt-sm-1">

            <h4>Adresimiz</h4>
            <ul>
              <li><a href="#">Mecidiyeköy, Büyükdere Cd. No:63, 34387 Şişli/İstanbul</a></li>
            </ul>

          </div>
          <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-4 mt-xl-1 mt-lg-1">

            <h4>Bize Ulaşın</h4>
            <div className="social-links">
              <a href="https://wa.me/905451100709" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                <img src="/footer-icons/whatsapp.svg" alt="Whatsapp Icon" />
              </a>
              <a href="mailto:ayakademi123@gmail.com" className="text-dark text-decoration-none">
                <img src="/footer-icons/mail.svg" alt="Mail Icon" />
              </a>
              <a href="tel:+905451100709" className="text-dark text-decoration-none">
                <img src="/footer-icons/phone-solid.svg" alt="Phone Icon" />
              </a>
            </div>

          </div>
          <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-4 mt-xl-1 mt-lg-1">

            <h4>Takipte kalın</h4>
            <div className="social-links">
              <a href="https://www.youtube.com/@ayakademi8521" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                <img src="/footer-icons/youtube.svg" alt="YouTube Icon" />
              </a>
              <a href="https://www.instagram.com/mecidiyekoy_ayakademi/" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                <img src="/footer-icons/instagram.svg" alt="Instagram Icon" />
              </a>
              <a href="#"><img src="/footer-icons/facebook.svg" alt="Facebook Icon" /></a>
              <a href="#"><img src="/footer-icons/twitter.svg" alt="Twitter Icon" /></a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
