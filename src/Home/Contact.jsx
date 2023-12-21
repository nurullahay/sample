import React from 'react';

export default function Contact() {
  return (
    <div className=" m-5 ms-1 ms-sm-1 ms-md-3 ms-lg-5  me-1 me-sm-1 me-md-3 me-lg-5">
      <div className="mx-5 ms-2 ms-sm-3 ms-md-5 ms-lg-5  me-2 me-sm-3 me-md-5 me-lg-5">
      <div className="row">
        <div className="col-lg-4 mt-t">
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

        <div className="col-lg-8 mt-4">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24073.6010215647!2d28.995773564921706!3d41.04275243397159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6ff38a15555%3A0x69f5893f7ac47c18!2sAy%20Ekip%20Akademi!5e0!3m2!1str!2str!4v1696287431201!5m2!1str!2str" 
        width="100%" 
        height="100%" 
        style= {{border: '0'}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </div>
    </div>
  );
}
