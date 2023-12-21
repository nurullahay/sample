
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Home/Banner';
import Contact from './Home/Contact';
import Footer from './Footer';
import Navbar from './Home/Navbar';
import Section from './Home/Section';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import OurCourses from './OurCourses/OurCourses';
import Video from './Home/Video';

function HomePage() {
  return (
    <div>
      <div className="App">
        <Banner />
        <Section />
        <Video />
        <Contact />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutUs />} />
          <Route path="/iletisim" element={<ContactUs />} />
          <Route path="/kurslar" element={<OurCourses />} />
          {/* Diğer sayfa yollarını buraya ekleyin */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
