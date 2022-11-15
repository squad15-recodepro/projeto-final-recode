import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer-content">
        <section id="empresa">
          <h2>Hubfarma:</h2>
          <a href="sobre.html">Sobre o projeto</a>
          <a href="valores.html">Valores</a>
          <a href="contato.html">Entre em contato</a>
        </section>
        <section id="cadastro">
          <h2>Faça parte:</h2>
          <Link to="/voluntario">Seja um voluntário</Link>
          <Link to="/sindicato">Cadastro de sindicatos</Link>
        </section>
        <section id="redes">
          <h2>Acompanhe nossas redes:</h2>
          <i className="fa-brands fa-instagram instagram"></i>
          <i className="fa-brands fa-facebook facebook"></i>
          <i className="fa-brands fa-youtube"></i>
        </section>
      </div>
      <span id="rights">
        <a href="https://github.com/squad15-recodepro"> © Squad 015 | 2022</a>
      </span>
    </footer>
  );
};

export default Footer;
