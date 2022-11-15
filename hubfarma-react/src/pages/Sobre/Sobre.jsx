import "./Sobre.css";

const Sobre = () => {
  return (
    <main>
      <section id="about">
        <div className="about-title">
          <h1>
            O que é a <span className="color-blue">Hub</span>
            <span className="color-green">farma</span>?
          </h1>
          <i className="fa-solid fa-arrow-down-long fa-4x"></i>
        </div>
        <div className="about-body">
          <img src={require("../../assets/favicon.png")} alt="logo" />
          <p>
            O projeto Hubfarma é uma plataforma que objetiva ajudar no combate ao analfabetismo entre adultos nas áreas rurais do Brasil. De acordo com os últimos dados coletados pela PNAD (Pesquisa Nacional por
            Amostra de Domicílios), em 2017, o analfabetismo ainda é um problema relevante na realidade brasileira. Nos espaços rurais, estima-se que a taxa de analfabetismo ainda seja ligeiramente maior,
            provavelmente devido à evasão escolar nos primeiros anos de ensino, motivada pela necessidade de ajuda laboral nos núcleos familiares, pelo difícil acesso a centros de ensino, entre outros fatores.
            Portanto, acreditamos que unir esforços ao estado para combater esse cenário atual da alfabetização nessas áreas seja uma iniciativa essencial.
          </p>
        </div>
        <div className="about-footer">
          <p>Não deixe de acompanhar o projeto nas redes sociais.</p>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
