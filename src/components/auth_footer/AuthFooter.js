import React from "react";
import whatsapp_icon from "../../assets/images/icons/login/whatsapp-icon.svg";
import insta_icon from "../../assets/images/icons/login/insta-icon.svg";
import mail_icon from "../../assets/images/icons/login/mail-icon.svg";
const AuthFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left ps-5 d-flex flex-column align-items-center flex-sm-row gap-2 text-center">
          <span> All Rights Reserved. Copyright © 2023</span>
          <span>Planet Re-Bag</span>
        </div>
        <div className="footer-icons align-items-center pe-5">
          <span className="icon-text text-wrap">Contact Us</span>
          <a href="">
            <img src={whatsapp_icon} alt="Facebook" />
          </a>
          <a href="">
            <img src={insta_icon} alt="Twitter" />
          </a>

          <a href="">
            <img src={mail_icon} alt="Instagram" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default AuthFooter;
