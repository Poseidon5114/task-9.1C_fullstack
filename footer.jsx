import React from 'react';
import './footer.css';
function Footer() {
    return (
        <div>
        <div className="footer">
          <div className="footer-section">
            <h2>Explore</h2>
            <ul className="subheadings">
              <li><a href="#">Home</a></li>
              <li><a href="#">Questions</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Support</h2>
            <ul className="subheadings">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Stay Connected</h2>
            <div className="social-media">
              <a href="#"><img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="Facebook" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" /></a>
              <a href="#"><img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <div className="footer2">
          <h3>DEV@Deakin 2022</h3>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Code of Conduct</a>
          </div>
        </div>
      </div>
    )
}
export default Footer; 