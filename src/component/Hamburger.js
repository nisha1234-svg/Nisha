"use client";

import './style/Hamburger.css';


export default function Hamburger({ onClick, isOpen }) {
  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

