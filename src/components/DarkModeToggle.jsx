// DarkModeToggle.js
import React from 'react';
import useDarkMode from '../customHooks/useDarkMode';


const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        Dark Mode
      </label>
    </div>
  );
};

export default DarkModeToggle;
