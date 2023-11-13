// useDarkMode.js
import { useState, useEffect } from 'react';
import "../App.css"
import "../styles/styles.css"

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // The localStorage item can indeed be retrieved before it's explicitly set. The localStorage is a persistent storage mechanism, and the getItem method will return null if the item does not exist. 
  //The useEffect hook in the provided code runs once when the component mounts, thanks to the empty dependency array ([]). This ensures that it only runs on the initial render and not on subsequent renders.
  
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    setIsDarkMode(savedMode === 'true');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
