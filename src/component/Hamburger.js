// "use client";

// import Link from 'next/link'
// import { useState } from 'react'

// function HamburgerMenu() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <>
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           display: 'none',
//           background: 'none',
//           border: 'none',
//           fontSize: '1.5rem',
//           cursor: 'pointer',
//           color: 'inherit'
//         }}
//         className="mobile-toggle"
//       >
//         {isOpen ? '✕' : '☰'}
//       </button>

//       <div style={{
//         display: isOpen ? 'flex' : 'none',
//         flexDirection: 'column',
//         gap: '1rem',
//         position: 'absolute',
//         top: '100%',
//         left: '0',
//         right: '0',
//         backgroundColor: 'inherit',
//         padding: '1rem',
//         boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//         zIndex: 999
//       }} className="mobile-menu">
//         <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
//         <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
//         <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        
//       </div>

//       <style jsx>{`
//         @media (max-width: 768px) {
//           .mobile-toggle {
//             display: block !important;
//           }
//         }
//         @media (min-width: 769px) {
//           .mobile-menu {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </>
//   )
// }

// export default HamburgerMenu
"use client";

import Link from 'next/link';
import { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1000;
          box-shadow: white;
        }

        .mobile-toggle {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: white;
          display: none;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 1rem;
          position: fixed;
          top: 60px; /* below navbar */
          left: 0;
          right: 0;
          background-color: white;
          padding: 1rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          z-index: 999;
        }

        .mobile-menu.open {
          display: flex;
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }

          .mobile-menu {
            display: none;
          }

          .mobile-menu.open {
            display: flex;
          }
        }

        @media (min-width: 769px) {
          .mobile-toggle {
            display: none;
          }

          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default HamburgerMenu;
