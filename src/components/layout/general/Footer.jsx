import React from "react";
import "../../../assets/styles/footer.css"; // Importa tus estilos CSS aquí

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Rotary</span>Maipú</h1>
          <p>
            Rotary Maipú se dedica a servir a la comunidad y promover la paz mundial a través de diversos proyectos y actividades.
          </p>
          <div className="contact">
            <span>&#9742; &nbsp; +56 9 1234 5678</span>
            <span>&#9993; &nbsp; info@rotarymaipu.cl</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Enlaces Rápidos</h2>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} rotarymaipu.cl | Diseñado por Francisco August
      </div>
    </footer>
  );
};

export default Footer;
