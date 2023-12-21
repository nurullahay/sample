import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

export default function Banner() {
  useEffect(() => {
    // Initialize the carousel after the component mounts
    const carousel = new window.bootstrap.Carousel(document.getElementById('mainBanner'), {
      interval: 7000, // Interval between slides in milliseconds
      pause: false,   // Set to true to pause on hover
    });

    // Optionally, pause the carousel on hover
    const banner = document.getElementById('mainBanner');
    banner.addEventListener('mouseenter', () => {
      carousel.pause();
    });

    banner.addEventListener('mouseleave', () => {
      carousel.cycle();
    });
  }, []); // Empty dependency array ensures that this effect runs once after the component mounts

  return (
    <div className="">
      <div className="main-header pt-lg-3 pt-2 position-absolute container-fluid"></div>
      <div id="mainBanner" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
        <div className="carousel-inner">
          {/* İlk Slayt */}
          <div className="carousel-item active" data-bs-interval="7000">
            <img src="/images/education.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption px-md-5">
              <h5>Hedefe Gİden Yolda</h5>
              <hr className="bg-light border-4 border-top border-light" />
              <p>BİREBİR DESTEK İLE POTANSİYELİNİZİ ORTAYA ÇIKARALIM</p>
              <div className="banner-btn">
                <button type="button" className="btn btn-secondary px-lg-5 px-md-4 px-2 py-2 rounded-0 border"><Link to="/iletisim" className='btn-banner-links'>İletişime Geç</Link></button>
                <button type="button" className="btn btn-banner-video px-lg-5 px-md-4 px-2 py-2 rounded-0 border"><Link to="/kurslar" className='btn-banner-links'>Ders Videoları İzle</Link></button>
              </div>
            </div>
          </div>
          {/* İkinci Slayt (farklı id kullanıldı) */}
          <div className="carousel-item" data-bs-interval="7000">
            <img src="/images/student-in.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption px-md-5">
              <h5>ÖNCÜ EĞİTİM MERKEZİ</h5>
              <hr className="bg-light border-4 border-top border-light" />
              <p>HAYALİNİZDEKİ ÜNİVERİSTEYE GİDEN YOLDA BİZE KATILIN!</p>
              <div className="banner-btn">
                <button type="button" className="btn btn-secondary px-lg-5 px-md-4 px-2 py-2 rounded-0 border"><Link to="/iletisim" className='btn-banner-links'>İletişime Geç</Link></button>
                <button type="button" className="btn btn-banner-video px-lg-5 px-md-4 px-2 py-2 rounded-0 border"><Link to="/kurslar" className='btn-banner-links'>Ders Videoları İzle</Link></button>
              </div>
            </div>
          </div>
          {/* Diğer Slaytlar */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
