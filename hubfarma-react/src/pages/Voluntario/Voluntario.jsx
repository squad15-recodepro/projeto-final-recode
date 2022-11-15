import { useState } from "react";
import { postVoluntario } from "../../services/VoluntarioService";
import "./Voluntario";

const Voluntario = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [endereco, setEndereco] = useState("");
  const [uf, setUf] = useState("");
  const [formacao, setFormacao] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const voluntario = { nome: nome, cpf: cpf, email: email, dataNasc: dataNasc, endereco: endereco, uf: uf, formacao: formacao };
    postVoluntario(voluntario);
    setNome("");
    setCpf("");
    setEmail("");
    setDataNasc("");
    setEndereco("");
    setUf("");
    setFormacao("");
  };

  const nomeChangeHandler = (event) => {
    setNome(event.target.value)
  }

  const cpfChangeHandler = (event) => {
    setCpf(event.target.value)
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const dataNascChangeHandler = (event) => {
    setDataNasc(event.target.value)
  }

  const enderecoChangeHandler = (event) => {
    setEndereco(event.target.value)
  }

  const ufChangeHandler = (event) => {
    setUf(event.target.value)
  }

  const formacaoChangeHandler = (event) => {
    setFormacao(event.target.value)
  }

  return (
    <main>
      <section id="cadastro-layout">
        <section className="cadastro-title">
          <h1>Faça parte, seja um voluntário!</h1>
        </section>
        <section className="cadastro-infos">
          <h2>
            O voluntário é peça-chave na viabilização do projeto Hubfarma. É por meio dele que podemos levar a alfabetização às pessoas que precisam dela. Portanto, fique por dentro do papel do
            <span className="color-blue"> voluntário</span>:
          </h2>
          <img src={require("../../assets/voluntario.png")} />
          <ol id="lista-cadastro-infos" type="A">
            <li className="item-lista-cadastro">
              <h3>Requisitos para se voluntariar:</h3>
              <ul>
                <li>Ter 18 (dezoito) anos ou mais.</li>
                <li>Ser graduado em Letras, na modalidade licenciatura, ou em Pedagogia.</li>
              </ul>
            </li>
            <li className="item-lista-cadastro">
              <h3>Como a Hubfarma dará suporte ao voluntário:</h3>
              <ul>
                <li>Os custos de ida e volta para a localidade onde as aulas serão ministradas serão arcados pelo projeto.</li>
                <li>Haverá um canal de comunicação exclusivo à disposição do voluntário durante todo o período de atuação no projeto.</li>
              </ul>
            </li>
          </ol>
        </section>
        <section className="cadastro-form">
          <div className="cadastro-form-header">
            <h3>Entre para se voluntariar:</h3>
            <button type="button" className="btn-default btn3" data-bs-toggle="modal" data-bs-target="#modalLogin">
              Entrar
            </button>

            <div className="modal fade" id="modalLogin" tabIndex="-1" aria-labelledby="modalLoginLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content login-form">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalLoginLabel">
                      Entre em sua conta:
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="campos-form">
                        <label htmlFor="email-login">E-mail:</label>
                        <input type="email" name="email-login" id="email-login" />
                      </div>
                      <div className="campos-form">
                        <label htmlFor="senha-login">Senha:</label>
                        <input type="password" name="senha-login" id="senha-login" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn-default btn1">
                      Salvar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            Se é a sua <b className="color-blue">primeira vez</b> aqui, realize seu cadastro para entrarmos em contato:
          </p>
          <form onSubmit={submitHandler} id="formulario">
            <div className="campos-form">
              <label htmlFor="nome-user">Nome completo:</label>
              <input onChange={nomeChangeHandler} value={nome} type="text" name="nome-user" id="nome-user" />
            </div>
            <div className="campos-form">
              <label htmlFor="cpf-user">CPF:</label>
              <input onChange={cpfChangeHandler} value={cpf} type="number" name="cpf-user" id="cpf-user" />
            </div>
            <div className="campos-form">
              <label htmlFor="email-user">E-mail:</label>
              <input onChange={emailChangeHandler} value={email} type="email" name="email-user" id="email-user" />
            </div>
            <div className="campos-form">
              <label htmlFor="data-nsc-user">Data de nascimento:</label>
              <input onChange={dataNascChangeHandler} value={dataNasc} type="date" name="data-nsc-user" id="data-nsc-user" />
            </div>
            <div className="campos-form">
              <label htmlFor="endereco-user">Endereço completo:</label>
              <textarea onChange={enderecoChangeHandler} value={endereco} name="endereco-user" id="endereco-user" cols="40" rows="2" placeholder="Ex.: Rua José da Silva, 314, apartamento 102. Bairro Novo Brasil."></textarea>
            </div>
            <div className="campos-form">
              <label htmlFor="uf-user">UF:</label>
              <select onChange={ufChangeHandler} value={uf} name="uf-user" id="uf-user">
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
            <div className="campos-form">
              <label htmlFor="formacao-user">Formação acadêmica:</label>
              <select onChange={formacaoChangeHandler} value={formacao} name="formacao-user" id="formacao-user">
                <option value=""></option>
                <option value="sc">Superior completo</option>
                <option value="si">Superior incompleto</option>
              </select>
            </div>
            <div id="btn-cadastrar">
              <input className="btn-default btn1" type="submit" value="Cadastrar-se" />
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Voluntario;
