import React from 'react';
import '../app/globals.css'; //Import your CSS file
import Link from 'next/link';

function HomePage() {
  return (
    
    <div className="body">
      
      <title>My Portfolio</title> 

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
          <a href="#contactme">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#privacypolicy">
            Privacy Policy
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/Stitchiiee">
            Github
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/ian-santucci-8a135727a/">
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
    <main>
    <div className="hero">
      <h1>Patientia Est Virtus</h1>
      <p>Welcome to my portfolio website! I made this website to briefly talk about different aspects of my life. In particular my credentials, I will be showcasing projects I have made, my skills, and provide other ways to contact me.</p>
    </div>
    <div className="calltoaction">
  <h3>Call To Action</h3>
  <p>I would like you to further explore my website. The easiest way to travel through my websites page is through the navigation bar at the top of the page or just by scrolling through, Feel free to look around!</p>
</div>
  <div id="aboutme">
  <h3>About Me</h3>
  <p>My name is Ian Santucci and I am a Business and Information Systems major at NJIT. Last spring semester I graduated Sussex County Community College and aquired my associates degree in Information Systems. 
    I am very excited to be graduating with my bacheolrs in the spring of 2024. I want nothing more then to start working full time. Hopefully I can attain an intership or a COOP this year to get me more comfortable in my field.</p>
</div>
<div id="projects">
  <h3>Projects</h3>
  <p>Some of the projects I have made include a text based adventure game written in Java, I helped organize my school yearbooks in highschool using photoshop, I edited tracks for a live dance recital using FL Studio, and I have made two other websites in basic HTML.  </p>
<script></script>
</div>
<div id="privacypolicy">
  <h3>Privacy Policy</h3>
  <p>
Last Updated: [8/22/2023]</p>

<p>Thank you for visiting my website. This Privacy Policy explains how I collect and use data on my website.</p>

<p>Information I Collect:</p>

<p>I do not collect any personal information from my website visitors unless explicitly provided by you. However, I do collect and store the following non-personal information for statistical purposes:</p>

<p>Total number of visitors</p>
<p>Page views</p>
<p>Browser type and version</p>
<p>Operating system</p>
<p>Date and time of access</p>
<p>Use of Information</p>

<p>The non-personal information I collect is used solely for the purpose of understanding how you interact with my website. This data helps me improve the content and functionality of my site and does not personally identify you.</p>

<p>Third-Party Services:</p>

<p>I do not use third-party analytics services or tracking tools on my website.</p>

<p>Cookies:</p>

<p>I do not use cookies to collect or store personal information.</p>

<p>Your Choices:</p>

<p>You have the option to disable cookies in your web browser, although this may affect your experience on my website.</p>

<p>Children's Privacy:</p>

<p>My website is not directed at children under the age of 13, and I do not knowingly collect any personal information from children.</p>

<p>Changes to this Privacy Policy:</p>

<p>I reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on my website.</p>

<p>Contact Me:</p>

<p>If you have any questions or concerns regarding this Privacy Policy, please contact me.</p>
</div>
<div id="contactme">
  <h3>Join the mailing list with the link below!</h3>
  <a href='https://mailchi.mp/[xxxxxx]/my-portfolio'>
    Mailing List
  </a>
  <p></p>
</div>
</main>
<footer>
</footer>
</div>
  );
};
export default HomePage