import React from 'react';
import '../app/globals.css'; //Import your CSS file
import Link from 'next/link';

function HomePage() {
  return (
    
    <div>
      
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
      <p>Welcome to my portfolio website! I made this website to briefly talk about different aspects of my life. In particular my credentials, showcase projects I have made, my resume, my skills, and provide other ways to contact me.</p>
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
<div id="privacypolicy">
  <h3>Privacy Policy</h3>
  <p>
Last Updated: [8/22/2023]

Thank you for visiting my website. This Privacy Policy explains how I collect and use data on my website.

Information I Collect:

I do not collect any personal information from my website visitors unless explicitly provided by you. However, I do collect and store the following non-personal information for statistical purposes:

Total number of visitors
Page views
Browser type and version
Operating system
Date and time of access
Use of Information

The non-personal information I collect is used solely for the purpose of understanding how you interact with my website. This data helps me improve the content and functionality of my site and does not personally identify you.

Third-Party Services:

I do not use third-party analytics services or tracking tools on my website.

Cookies:

I do not use cookies to collect or store personal information.

Your Choices:

You have the option to disable cookies in your web browser, although this may affect your experience on my website.

Children's Privacy:

My website is not directed at children under the age of 13, and I do not knowingly collect any personal information from children.

Changes to this Privacy Policy:

I reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on my website.

Contact Me:

If you have any questions or concerns regarding this Privacy Policy, please contact me at [Your Contact Information].</p>
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