import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory(); // Obtiene la instancia de history

  const goToProfile = () => {
    // Define la función para navegar a la página de perfil
    history.push("/profile"); // Redirige al usuario a la página de perfil
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <FooterButton image={Home} />
        <FooterButton image={Seeker} />
        {/* Agrega el botón "+" con el evento onClick para ir a la página de perfil */}
        <FooterButton image={Notificacion} />
        <FooterButton image={Profile} onClick={goToProfile} />
      </div>

      <div className="img__footer">
        <img src={ImgFooter} className="footer" alt="footer" />
      </div>
    </div>
  );
};

export default Footer;
