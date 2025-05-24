import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

const Footer = () => (
  <footer className="footer">
    <a
      className="footer__link"
      href="https://github.com/lfdejong"
    >
      <FiGithub/>
      <span >Visit on GitHub</span>
    </a>
    <button className='mail-button' onClick={() => window.location = 'mailto:levifinchdejong@hotmail.com'}>
      <IoIosMail />
      <span className="footer__link">
         Contact Me
      </span>
    
     </button>
    <a  className="footer__link"
      href="https://www.linkedin.com/in/levi-de-jong-80678412b/">
    <FaLinkedin/>
    <span >
      Visit on Linkedin
    </span>
    
    </a>
  </footer>
)

export default Footer
