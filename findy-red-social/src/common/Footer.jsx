import React from "react";
import { Link } from "react-router-dom"; 
import "../common/footer.scss";
import Home from "../assets/footer/Home.png";
import Seeker from "../assets/footer/Seeker.png";
import Notificacion from "../assets/footer/Notificacion.png";
import Profile from "../assets/footer/Profile.png";
import ImgFooter from "../assets/footer/ImgFooter.png";

function FooterButton({ image, onClick }) {
  return (
    <button
      className="footer__button"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    ></button>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <Link to="/">
        <FooterButton image={Home} />
        </Link>
        <FooterButton image={Seeker} />
        <Link to="/details"> 
          <button className="button__footer">+</button>
        </Link>
        <FooterButton image={Notificacion} />
        <Link to="/profile"> 
        <FooterButton image={Profile} />
        </Link>
      </div>

      <div className="img__footer">
        <img src={ImgFooter} className="footer" alt="footer" />
      </div>
    </div>
  );
};

export default Footer;
