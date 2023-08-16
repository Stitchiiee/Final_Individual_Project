import React from 'react';
import '../app/globals.css'; //Import your CSS file
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      
      <nav>
      <ul className="navbar">
        <li className="nav-item">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/resume">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/privacypolicy">
            Privacy Policy
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/github">
            Github
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/linkedin">
            Linkedin
          </Link>
        </li>
      </ul>
    </nav>
    <div className="hero">
      <h1>Patientia Est Virtus</h1>
      <p>This is the home page of my awesome website built with Next.js!</p>
    </div>
    </div>

  );
}

export default HomePage;