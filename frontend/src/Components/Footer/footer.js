import React from "react";
import "./footer.css";
import facebook from "./img/facebook.png";
import watsapp from "./img/watsapp.png";
import github from "./img/github.png";
import linkin from "./img/linkin.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footerHead">
          <h2>Tharushi Dananjana</h2>
        </div>

        <div className="footerHead">
          <p>
            A focused Web Developer building the Websites and Web Applications
            that lead to the success of the overall product
          </p>
        </div>

        <div className="footerContainer">
          <div className="socialIcons">
            <a href="https://www.facebook.com/tharushi.dananjana.507239?mibextid=ZbWKwL " data-popup="Facebook">
              <img src={facebook} alt="facebook" />
            </a>
            <a href=" 0705823421" data-popup="WhatsApp">
              <img src={watsapp} alt="watsapp" />
            </a>
            <a href="https://github.com/tharushi-dananjana" data-popup="GitHub">
              <img src={github} alt="github" />
            </a>
            <a href="http://www.linkedin.com/in/tharushi-dananjana" data-popup="LinkedIn">
              <img src={linkin} alt="linkin" />
            </a>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            Copyright &copy;2025; Designed by{" "}
            <span className="designer">Tharushi Dananjana</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;