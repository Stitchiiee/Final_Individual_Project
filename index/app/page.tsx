import React from 'react';
import '../app/globals.css'; //Import your CSS file
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <nav>
      <ul className="navbar">
        <li className="nav-item">
          <a href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#aboutme">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#resume">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a href="#contactme">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="/privacypolicy">
            Privacy Policy
          </a>
        </li>
        <li className="nav-item">
          <a href="/github">
            Github
          </a>
        </li>
        <li className="nav-item">
          <a href="/linkedin">
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
    <main>
    <div className="hero">
      <h1>Patientia Est Virtus</h1>
      <p>This website was made to briefly talk about different aspects of my life. In particular my credentials, showcase projects I have made, my resume, my skills, and provide other ways to contact me.</p>
    </div>
    <div className="calltoaction">
  <h3>Call To Action</h3>
  <p>I would like you to further explore my website. The easiest way to travel through my websites pages is through the navigation bar at the top of the page. Feel free to look around!</p>
</div>
  <div id="aboutme">
  <h3>About Me</h3>
  <p>My name is Ian Santucci and I am a Business and Information Systems major at NJIT. Last spring semester I graduated Sussex County Community College and aquired my associates degree in Information Systems. 
    I am very excited to be graduating with my bacheolrs at the end of this spring. I want nothing more then to start working full time. Hopefully I can attain an intership or a COOP this year to get me more comfortable in my field.</p>
</div>
<div id="projects">
  <h3>Projects</h3>
  <p>My name is Ian Santucci and I am a Business and Information Systems major at NJIT. Last spring semester I graduated Sussex County Community College and aquired my associates degree in Information Systems. 
    I am very excited to be graduating with my bacheolrs at the end of this spring. I want nothing more then to start working full time. Hopefully I can attain an intership or a COOP this year to get me more comfortable in my field.</p>
</div>
<div id="resume">
  <h3>My Resume</h3>
  <p>My name is Ian Santucci and I am a Business and Information Systems major at NJIT. Last spring semester I graduated Sussex County Community College and aquired my associates degree in Information Systems. 
    I am very excited to be graduating with my bacheolrs at the end of this spring. I want nothing more then to start working full time. Hopefully I can attain an intership or a COOP this year to get me more comfortable in my field.</p>
</div>
<div id="privacypolicy">
  <h3>Privacy Policy</h3>
  <p>My name is Ian Santucci and I am a Business and Information Systems major at NJIT. Last spring semester I graduated Sussex County Community College and aquired my associates degree in Information Systems. 
    I am very excited to be graduating with my bacheolrs at the end of this spring. I want nothing more then to start working full time. Hopefully I can attain an intership or a COOP this year to get me more comfortable in my field.</p>
</div>
<div id="contactme">
  <h3>Mailchimp</h3>
  <p></p>
</div>
</main>
<footer>
</footer>
</div>
  );
};
export default HomePage