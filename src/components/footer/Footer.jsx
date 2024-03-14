import React from "react";
import './Footer.css';
function Footer() {
  return (
    <div className="container-fluid" id="footerPage">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>Social Links</h4>
            <p>
              <i class="bx bxl-facebook"></i> Facebook Page
            </p>
            <p>
              <i class="bx bxl-whatsapp"></i> WhatsApp Number
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>About Us</h4>
            <p>
              At <strong>Skinny Tours</strong>, we value how special each and every cargo is to you. We transport goods to and from South Africa
              and Zimbabwe with utmost deligent and care. 
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>Quick Links</h4>
            <p><a href="/">Home</a></p>
            <p><a href="/about">Gallery</a></p>
            <p><a href="/services">Contact</a></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>Contact Us</h4>
            <p> 24, 10th Avenue: Edenvale, Gauteng </p>
            <p> Mon ~ Sunday: Open Holidays</p>
            <p> +27 10 023 4680: +27 63 066 8806 </p>
            <p> dumie@skinnytours.co.za </p>
            <p> operations@skinnytours.co.za </p>
          </div>
        </div>
      </div>
      <div id="footerRightCard">
        <small>All Rights Reserved &copy; Turbo Pro SA 2024. Developed by <a href="https://emmanuelkaome-mangeelato.vercel.app/" target="_blank">Emmanuel 'Gadaffi' Kaome</a></small>
      </div>
    </div>
  );
}

export default Footer;
