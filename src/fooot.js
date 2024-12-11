import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright © Your Website {currentYear}</p>

        <div className="text-center">
          <a href="/privacy-policy" className="text-white me-3">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white me-3">Terms of Service</a>
          <a href="/contact-us" className="text-white">Contact Us</a>
        </div>

        <div className="text-center mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
            <i className="fab fa-facebook-f" aria-label="Facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
            <i className="fab fa-twitter" aria-label="Twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa-instagram" aria-label="Instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

