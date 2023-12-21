// Video.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <div className="video-container position-relative video-overlay">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/university.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Link to="/kurslar">
        <div className="content-overlay position-absolute bottom-0 start-50 translate-middle-x">
          <div className='title-div text-center mb-5 p-3' style={{ color: '#333' }}>
            <h1 className="" style={{ fontSize: '35px' }}>
              Ders Videoları İzle!
            </h1>
            <span><FaPlay /></span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
