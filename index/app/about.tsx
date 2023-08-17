import React from 'react';
import '../app/globals.css'; //Import your CSS file
import Link from 'next/link';

function HomePage() {
  return (
    
    <div className="homepage">
      
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
    <main>
    <div className="hero">
      <h1>Patientia Est Virtus</h1>
      <p>This website was made to briefly talk about different aspects of my life. In particular my credentials, showcase projects I have made, my resume, my skills, and other provide ways to contact me.</p>
    </div>
    <div className="briefbio">
  <h3>Brief Bio</h3>
  <p>My name is Ian Santucci and I am a Business and Information Systems major at NJIT. Last spring semester I graduated Sussex County Community College and aquired my associates degree in Information Systems. 
    I am very excited to be graduating with my bacheolrs at the end of this spring. I want nothing more then to start working full time. Hopefully I can attain an intership or a COOP this year to get me more comfortable in my field.</p>
</div>
<div className="calltoaction">
  <h3>Call To Action</h3>
  <p>I would like you to further explore my website. The easiest way to travel through my websites pages is through the navigation bar at the top of the page. Feel free to look around!</p>
</div>
<div className="mailchimp">
  <h3>Mailchimp</h3>
  <p>This is the home page of my awesome website built with Next.js! This website took me a little longer then my piers because I contracted Covid-19.</p>
</div>
</main>
<footer>
</footer>


</div>
  );
}

export default HomePage;