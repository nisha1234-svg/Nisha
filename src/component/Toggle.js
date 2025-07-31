'use client';
import React, { useState } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>Theme Toggle Demo</h1>
        
        <div className="toggle-container">
          <div className="toggle-button" onClick={toggleTheme}>
            <div className={`toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
              <div className="toggle-circle">
                {isDarkMode ? '🌙' : '☀️'}
              </div>
            </div>
            <span className="toggle-label">
              {isDarkMode ? 'DARK MODE' : 'LIGHT MODE'}
            </span>
          </div>
        </div>

        <p>
          This is a sample paragraph to demonstrate the theme changes. 
          Click the toggle button above to switch between light and dark modes!
        </p>
      </div>

      <style jsx>{`
        .app {
          min-height: 100vh;
          transition: all 0.3s ease;
          font-family: Arial, sans-serif;
        }

        .app.light {
          background-color: #ffffff;
          color: #333333;
        }

        .app.dark {
          background-color: #1a1a1a;
          color: #ffffff;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          font-weight: 300;
        }

        .toggle-container {
          margin: 40px 0;
        }

        .toggle-button {
          display: flex;
          justify-content:center;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }

        .toggle-slider {
          width: 120px;
          height: 50px;
          border-radius: 25px;
          position: relative;
          transition: all 0.3s ease;
          margin-right: 15px;
        }

        .toggle-slider.light {
          background-color: #e0e0e0;
          border: 2px solid #cccccc;
        }

        .toggle-slider.dark {
          background-color: #4a4a4a;
          border: 2px solid #666666;
        }

        .toggle-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: white;
          position: absolute;
          top: 3px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .toggle-slider.light .toggle-circle {
          left: 3px;
        }

        .toggle-slider.dark .toggle-circle {
          left: 73px;
          background-color: #333333;
        }

        .toggle-label {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-top: 40px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .app.light p {
          color: #666666;
        }

        .app.dark p {
          color: #cccccc;
        }
      `}</style>
    </div>
  );
}

