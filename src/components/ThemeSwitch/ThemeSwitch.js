import React, { useState, useEffect } from 'react';
import './ThemeSwitch.css';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ThemeToggle;
