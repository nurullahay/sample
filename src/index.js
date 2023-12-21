import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; 
// src/index.js veya src/index.jsx dosyanızı düzenleyin
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

