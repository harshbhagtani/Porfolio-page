import React from "react";
import "./footer.css";
import loc from "./assets/location.png";
import phone from "./assets/phone.png";
import email from "./assets/email.png";

function Footer() {
  return (
    <div className="footerr">
      <div className="footer">
        <div className="left">
          <h3>Harsh's Portfolio</h3>
          <p>
            Thank you for visiting my portfolio. I hope you liked it.Connect
            with me over socials{" "}
          </p>
        </div>
        <div className="right">
          <h3>Contact Info</h3>
          <div>
            <img src={phone}></img>
            <span>+91 6264784358</span>
          </div>
          <div>
            <img src={email}></img>
            <span>harsh.bhagtani1@gmail.com</span>
          </div>
          <div>
            <img src={loc}></img>
            <span>Jabalpur,Madhya Pradesh ,India</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid gray" }}></div>
      <h5
        style={{
          color: "white",
          textAlign: "center",
          margin: "0",
          marginTop: "5px",
        }}
      >
        Made with by ❤️ Harsh Bhagtani
      </h5>
    </div>
  );
}

export default Footer;
