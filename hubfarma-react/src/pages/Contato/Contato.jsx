import "./Contato.css";

const Contato = () => {
  return (
    <main>
      <section id="contato">
        <section className="contato-title">
          <h1>Entre em contato conosco</h1>
        </section>
        <section className="contato-form">
          <h2>Via formulário:</h2>
          <form>
            <div className="campos-form">
              <label htmlFor="contato-nome">Nome:</label>
              <input type="text" name="contato-nome" id="contato-nome" />
            </div>
            <div className="campos-form">
              <label htmlFor="contato-email">E-mail:</label>
              <input type="email" name="contato-email" id="contato-email" />
            </div>
            <div className="campos-form">
              <label htmlFor="contato-texto">Insira seu texto aqui:</label>
              <textarea name="contato-texto" id="contato-texto" cols="30" rows="4"></textarea>
            </div>
            <div className="btn-container">
              <input className="btn-default btn2" type="submit" value="Enviar" />
            </div>
          </form>
        </section>
        <section className="contato-infos">
          <h2>Nossos canais:</h2>
          <p>
            <i className="fa-solid fa-square-phone"></i> Telefone: (99) 9999-9999
          </p>
          <p>
            <i className="fa-brands fa-square-whatsapp"></i> Whatsapp: (99) 99999-9999
          </p>
          <p>
            <i className="fa-solid fa-square-envelope"></i> E-email: contatohubfarma@hubfarma.com
          </p>
        </section>
        <section className="contato-redes">
          <h2>Nossas redes:</h2>
          <div className="contato-redes-rows">
            <p>
              <a href="#">
                <i className="fa-brands fa-instagram instagram"></i> Instagram
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fa-brands fa-facebook facebook"></i> Facebook
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fa-brands fa-youtube"></i> Youtube
              </a>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Contato;
