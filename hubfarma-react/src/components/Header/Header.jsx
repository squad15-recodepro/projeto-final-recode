import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav id="barra-de-navegacao" className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="index.html">
            <img src={require("../../assets/favicon.png")} alt="logo" width="60" />
            <span id="logo-title">Hubfarma</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegacao" aria-controls="navegacao" aria-expanded="false" aria-label="Toggler navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navegacao">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className="nav-link">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
