import { useState } from "react";
import { postSindicato } from "../../services/SindicatoService";

const Sindicato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState();
  const [endereco, setEndereco] = useState("");
  const [uf, setUf] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const sindicato = { nome: nome, email: email, cnpj: cnpj, endereco: endereco, uf: uf };
    postSindicato(sindicato);
    setNome("")
    setEmail("")
    setCnpj("")
    setEndereco("")
    setUf("")
  };

  const nomeChangeHandler = (event) => {
    setNome(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const cnpjChangeHandler = (event) => {
    setCnpj(event.target.value);
  };

  const enderecoChangeHandler = (event) => {
    setEndereco(event.target.value);
  };

  const ufChangeHandler = (event) => {
    setUf(event.target.value);
  };

  return (
    <main>
      <section id="cadastro-layout">
        <section className="cadastro-title">
          <h1>Cadastro de sindicatos</h1>
        </section>
        <section className="cadastro-infos">
          <h2>
            Os <span className="color-green">sindicatos</span> desempenham um papel importante na execução do projeto Hubfarma. Saiba como:
          </h2>
          <img src={require("../../assets/sindicato.png")} alt="ilustração sindicato" />
          <ol id="lista-cadastro-infos" type="A">
            <li className="item-lista-cadastro">
              <h3>Cooptação de alunos:</h3>
              <ul>
                <li>Por meio do registro de trabalhadores e do contato local, os sindicatos são a ponte estratégica que possibilita a conexão entre os voluntários, e projeto Hubfarma em si, com os alunos.</li>
              </ul>
            </li>
            <li className="item-lista-cadastro">
              <h3>Espaço físico para execução das aulas:</h3>
              <ul>
                <li>Além da conexão, os sindicatos estão aptos a disponibilizarem, de forma temporária, salas para aplicação das aulas para os alunos inscritos no programa.</li>
              </ul>
            </li>
          </ol>
        </section>
        <section className="cadastro-form">
          <div className="cadastro-form-header">
            <h3>
              Realize o <span className="color-blue">cadastro</span> do sindicato:
            </h3>
          </div>
          <p>É representante de algum sindicato rural e deseja fazer parte da Hubfarma? Preencha os dados a seguir que entraremos em contato.</p>
          <form onSubmit={submitHandler} id="formulario">
            <div className="campos-form">
              <label htmlFor="nome-sindicato">Nome do sindicato:</label>
              <input onChange={nomeChangeHandler} value={nome} type="text" name="nome-sindicato" id="nome-sindicato" />
            </div>
            <div className="campos-form">
              <label htmlFor="email-sindicato">E-mail:</label>
              <input onChange={emailChangeHandler} value={email} type="email" name="email-sindicato" id="email-sindicato" />
            </div>
            <div className="campos-form">
              <label htmlFor="cnpj-sindicato">CNPJ:</label>
              <input onChange={cnpjChangeHandler} value={cnpj} type="number" name="cnpj-sindicato" id="cnpj-sindicato" />
            </div>
            <div className="campos-form">
              <label htmlFor="endereco-user">Endereço completo:</label>
              <textarea
                onChange={enderecoChangeHandler}
                value={endereco}
                name="endereco-user"
                id="endereco-user"
                cols="40"
                rows="2"
                placeholder="Ex.: Rua José da Silva, 314, apartamento 102. Bairro Novo Brasil."
              ></textarea>
            </div>
            <div className="campos-form">
              <label htmlFor="uf-user">UF:</label>
              <select value={uf} onChange={ufChangeHandler} name="uf-user" id="uf-user">
                <option value=""></option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>
            </div>
            <div id="btn-cadastrar">
              <input className="btn-default btn1" type="submit" value="Cadastrar" />
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Sindicato;
