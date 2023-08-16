import React from 'react';
import Link from 'next/link';

function navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;