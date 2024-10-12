import React from "react";
import "./Footer.css";

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
    return <div class="container">

    <footer class="d-flex  justify-content-between align-items-center py-3 ">
      <div class=" d-flex align-items-center">
        <span class="mb-3 mb-md-0 text-body-secondary text">Copyright © {currentYear} Osteria. All rights reserved.</span>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com/login?lang=en"><img src="./assets/facebook.svg" alt="facebook icon" height="30px" /></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="https://www.instagram.com/"><img src="./assets/instagram.svg" alt="instagram icon" height="30px" /></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="https://twitter.com/login?lang=en"><img src="./assets/twitter.svg" alt="twitter icon" height="30px" /></a></li>
      </ul>
    </footer>
  </div>
}

export default Footer;