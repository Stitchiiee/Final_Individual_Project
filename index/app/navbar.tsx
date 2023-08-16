import React from 'react';
import '../app/globals.css'; //Import your CSS file
import Link from 'next/link';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to My Next.js Website</h1>
      <p>This is the home page of my awesome website built with Next.js!</p>
    </div>
  );
}

export default HomePage;