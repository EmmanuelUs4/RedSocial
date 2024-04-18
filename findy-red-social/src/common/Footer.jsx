import React from "react";
import "../common/footer.scss";
import Home from "../assets/footer/Home.png";
import Seeker from "../assets/footer/Seeker.png";
import Notificacion from "../assets/footer/Notificacion.png";
import Profile from "../assets/footer/Profile.png";
import ImgFooter from "../assets/footer/ImgFooter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <button
          className="footer__button footer__button--home"
          style={{ backgroundImage: `url(${Home})` }}
        ></button>

        <button
          className="footer__button footer__button--seeker"
          style={{ backgroundImage: `url(${Seeker})` }}
        ></button>
        
        <button className="button__footer">+</button>

        <button
          className="footer__button footer__button--notification"
          style={{ backgroundImage: `url(${Notificacion})` }}
        ></button>

        <button
          className="footer__button footer__button--profile"
          style={{ backgroundImage: `url(${Profile})` }}
        ></button>
      </div>

      <div className="img__footer">
        <img src={ImgFooter} className="footer" alt="footer" />
      </div>
    </div>
  );
};

export default Footer;
