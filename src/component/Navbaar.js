
'use client';

import Link from "next/link";

const Navbaar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#222',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background 0.3s',
  };

  return (
    <div style={navStyle}>
      <Link href="/about" style={linkStyle}>About</Link>
      <Link href="/home" style={linkStyle}>Home</Link>
      <Link href="/contact" style={linkStyle}>Contact</Link>
      
    </div>
  );
};

export default Navbaar;

