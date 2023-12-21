import React, { useState } from 'react';

export default function Contact() {

  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <div className="container mt-5">
      <div className="mx-5 ms-2 ms-sm-3 ms-md-5 ms-lg-5  me-2 me-sm-3 me-md-5 me-lg-5">
        <div className="row">
          <div className="col-lg-6 mt-t">
            <div className='form-first-box'>
              <div className='form-secondary-box p-3'>
                <h4 className='text-center'>Biz Size Ulaşalım</h4>
                <form action="/action_page.php">
                  <div className="form-group mt-3">
                    <label htmlFor="name">Adınız:</label>
                    <input type="text" className="form-control" name="name" id="name" />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="email">E-posta adresiniz:</label>
                    <input type="email" className="form-control" name="email" id="email" />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="subject">Konu:</label>
                    <input type="text" className="form-control" name="subject" id="subject" />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="message">Mesajınız:</label>
                    <textarea className="form-control" name="message" id="message" rows="5"></textarea>
                  </div>

                  <button type="reset" className="btn form-btn my-2">Temizle</button>
                  <button type="submit" className="btn form-btn my-2" style={{ float: 'right' }}>Gönder</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-xl-auto mt-lg-auto">
            <img src="/images/happy-student-vector.jpg" alt="" loading="lazy" width="100%" height="auto" />
          </div>
        </div>
        </div>
        
        <hr className='style13'/>
        <div className="mx-5 ms-2 ms-sm-3 ms-md-5 ms-lg-5  me-2 me-sm-3 me-md-5 me-lg-5">

        

        <div className="row">

          <div className="col-12 col-xl-6 col-lg-12 mt-5">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24073.6010215647!2d28.995773564921706!3d41.04275243397159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6ff38a15555%3A0x69f5893f7ac47c18!2sAy%20Ekip%20Akademi!5e0!3m2!1str!2str!4v1696287431201!5m2!1str!2str"
                width="100%"
                height="350px"
                className=''
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            <div className='mt-3'>

              <img
                src="/icons/locaiton.png"
                alt="Location Icon"
                className='mb-2'
                style={{ width: '40px', height: '40px' }}
              />
              <span className='contact-parag'><span className='fw-bold ms-3 me-2'>Adress:</span>Mecidiyeköy, Büyükdere Cd. No:63, 34387 Şişli/İstanbul</span>

            </div>



          </div>

          <div className="col-12 col-xl-6 col-lg-12 mt-5 mt-xl-auto mt-lg-auto">
            <h3 className='text-center mt-3 mb-5'>İletişim kanalları</h3>
            <div
              className={`row align-items-center ms-auto me-auto ms-xl-5 me-xl-5 ms-lg-5 me-lg-5 ms-md-3 me-md-3 ${isIconHovered ? 'rotate-container' : ''}`}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
            >
              <div className="col-9">
                <p className='contact-parag hover-underline-animation d-grid d-sm-flex'>
                  <span className='me-3 fw-bold'>E-mail:</span>
                  <a href="mailto:ayakademi123@gmail.com" className="text-dark text-decoration-none">ayakademi123@gmail.com</a>
                </p>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <img
                  src="/icons/gmail.png"
                  alt="Gmail Icon"
                  className={`contact-icon ${isIconHovered ? 'rotate' : ''}`}
                  style={{ width: '50px', height: 'auto' }}
             />
              </div>
            </div>

            <hr className='icon-line' />

            <div
              className={`row align-items-center ms-auto me-auto ms-xl-5 me-xl-5 ms-lg-5 me-lg-5 ms-md-3 me-md-3 ${isIconHovered ? 'rotate-container' : ''}`}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
            >
              <div className="col-9">
                <p className='contact-parag hover-underline-animation d-grid d-sm-flex'>
                  <span className='me-3 fw-bold'>Instagram:</span>
                  <a href="https://www.instagram.com/mecidiyekoy_ayakademi/" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                    mecidiyekoy_ayakademi
                  </a>
                </p>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <img
                  src="/icons/instagram.png"
                  alt="Instagram Icon"
                  className={`contact-icon ${isIconHovered ? 'rotate' : ''}`}
                  style={{ width: '50px', height: 'auto' }}
                />
              </div>
            </div>

            <hr className='icon-line' />

            <div
              className={`row align-items-center ms-auto me-auto ms-xl-5 me-xl-5 ms-lg-5 me-lg-5 ms-md-3 me-md-3 ${isIconHovered ? 'rotate-container' : ''}`}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
            >
              <div className="col-9">
                <p className='contact-parag hover-underline-animation d-grid d-sm-flex'>
                  <span className='me-3 fw-bold'>YouTube:</span>
                  <a href="https://www.youtube.com/@ayakademi8521" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                    Ayakademi8521
                  </a>
                </p>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <img
                  src="/icons/youtube.png"
                  alt="YouTube Icon"
                  className={`contact-icon ${isIconHovered ? 'rotate' : ''}`}
                  style={{ width: '50px', height: 'auto' }}
                />
              </div>
            </div>

            <hr className='icon-line' />

            <div
              className={`row align-items-center ms-auto me-auto ms-xl-5 me-xl-5 ms-lg-5 me-lg-5 ms-md-3 me-md-3 ${isIconHovered ? 'rotate-container' : ''}`}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
            >
              <div className="col-9">
                <p className='contact-parag hover-underline-animation d-grid d-sm-flex'>
                  <span className='me-3 fw-bold'>Whatsapp:</span>
                  <a href="https://wa.me/905451100709" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                    0545 110 07 09
                  </a>
                </p>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <img
                  src="/icons/whatsapp.png"
                  alt="Whatsapp Icon"
                  className={`contact-icon ${isIconHovered ? 'rotate' : ''}`}
                  style={{ width: '50px', height: 'auto' }}
                />
              </div>
            </div>

            <hr className='icon-line' />

            <div
              className={`row align-items-center ms-auto me-auto ms-xl-5 me-xl-5 ms-lg-5 me-lg-5 ms-md-3 me-md-3 ${isIconHovered ? 'rotate-container' : ''}`}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
            >
              <div className="col-9">
                <p className='contact-parag hover-underline-animation d-grid d-sm-flex'>
                  <span className='me-3 fw-bold'>Telefon:</span>
                  <a href="tel:+905451100709" className="text-dark text-decoration-none">0545 110 07 09</a>
                </p>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <img
                  src="/icons/telephone.png"
                  alt="Telephone Icon"
                  className={`contact-icon ${isIconHovered ? 'rotate' : ''}`}
                  style={{ width: '50px', height: 'auto' }}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
