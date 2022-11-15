import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section id="banner">
        <img src={require("../../assets/leitor.png")} alt="leitor" />
        <div id="banner-content">
          <div id="banner-text">
            <h1>Seja bem-vindo(a) à Hubfarma!</h1>
            <p>
              Uma plataforma que ajuda a levar alfabetização a diversos pontos do Brasil, por meio de sindicatos rurais e voluntários que se dispõem a contribuir na alfabetização de trabalhadores do campo que não
              tiveram, ou concluíram, seu processo de letramento.
            </p>
            <p>Se deseja fazer parte do projeto, selecione uma opção:</p>
          </div>
          <div id="banner-buttons">
            <Link to="/voluntario">
              <button className="btn-default btn1">
                <i className="fa-solid fa-person-chalkboard"></i> Voluntário
              </button>
            </Link>
            <Link to="/sindicato">
              <button className="btn-default btn2">
                <i className="fa-solid fa-industry"></i> Sindicato
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section id="second-main">
        <section id="notas">
          <div className="topicos">
            <i className="fa-solid fa-pencil fa-3x"></i>
            <h3>A alfabetização</h3>
            <p>
              O índice de analfabetismo nas áreas rurais é comprovadamente maior que nas demais áreas, por isso ações como esta, em conjunto com ações governamentais, são essenciais para combater o analfabetismo.
            </p>
          </div>
          <div className="topicos">
            <i className="fa-solid fa-handshake-angle fa-3x"></i>
            <h3>Voluntários com propósito</h3>
            <p>A experiência da transmissão de saber pode ser enriquecedora para os dois lados.</p>
          </div>
          <div className="topicos">
            <i className="fa-solid fa-earth-americas fa-3x"></i>
            <h3>Sindicatos pelo Brasil</h3>
            <p>A participação dos sindicatos rurais é de extrema importância na medida em que possibilitam espaço físico e organização para a aplicação das aulas.</p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
