import React from 'react';
import { GoSun } from 'react-icons/go';
import { FaMoon } from 'react-icons/fa';

const DarkLightMode = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="toggle-dark-mode position-absolute ms-5 mt-4 position-fixed" onClick={toggleDarkMode}>
      <div className={`d-inline-flex border border-1 rounded-5 gap-3 bg-dark`}>
        <GoSun className={`mode-icon fs-1 p-1 border-right ${isDarkMode ? 'inactive-sun' : 'active-sun'}`} />
        <FaMoon className={`mode-icon fs-1 p-2 border-right ${isDarkMode ? 'active-moon' : 'inactive-moon'}`} />
      </div>
    </div>
  );
};

export default DarkLightMode;
