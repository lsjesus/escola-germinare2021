import './style.css'
import image from '../assets/imagem.jpeg'
import { useState } from 'react'
import {Header} from '../../../components/Title-2/Header'
const Contato = ()=>{
/*
  function changeColor(id){
    id = "name subject"
    document.getElementById(id).classList.toggle('incorrect')
  }
*/

  function recebeData(e){
    e.preventDefault()

    if (
      document.getElementById('error-name').style.display === "block" ||
      document.getElementById('error-surname').style.display === "block" ||
      document.getElementById('error-email').style.display === "block" ||
      document.getElementById('error-subject').style.display === "block" ||
      document.getElementById('error-message').style.display === "block"
      ){
      return
    }
    const formularioInfo = {
      nome: e.target[0].value,
      email: e.target[1].value,
      motivo: e.target[2].value,
      mensagem: e.target[3].value,
    }
    document.location.reload(true)
    cleanForm()
  }

  function cleanForm(event) {
    document.getElementById("formjs").reset();
    setNameValue('')
    setSubjectValue('')
    setEmailValue('')
  }

  function validateEmail(email){
    let erroremail = false

    const design = document.getElementById('email').style;

    //Valida se tem @
    if (!email.split('').includes('@')){erroremail = true}
    //Valida se tem texto após o @
    else {if (email.split('@')[email.split('@').length-1] === ""){erroremail = true}}

    if (erroremail){
      document.getElementById('error-email').style.display = "block";
      design.border = "solid 2px red";
      design.background = "#ffdddd";
      design.outline = "2px solid red"
    }
    else {
      document.getElementById('error-email').style.display = "none";
      design.border = "2px solid #5E61E6"
      design.background = "white"
      design.outline = "2px solid #5E61E6"
    }
  }

  function validateName(name) {
    const letters = /^[A-Za-záàâãéèêíïóôõöúçñüÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑÜ ]+$/;

    let errorsurname = false;
    let errorname = false;
    const design = document.getElementById('name').style

    if (!letters.test(name)) {
      document.getElementById('error-name').style.display = "block";
      errorname = true;
        }
    else {
      document.getElementById('error-name').style.display = "none";
    }
    if (name.includes(" ") && letters.test(name.split(" ")[1])) {
      document.getElementById('error-surname').style.display = "none"; 
    }
    else {
      document.getElementById('error-surname').style.display = "block";
      errorsurname = true;
    }
    if (errorsurname || errorname) {
      design.border = "solid 2px red";
      design.background = "#ffdddd";
      design.outline = "2px solid red"
      
    }
    else {
      design.border = "2px solid #5E61E6"
      design.background = "white"
      design.outline = "2px solid #5E61E6"
    }
  }

function validateSubject(validation) {
  const letters = /^[0-9\s]*$/g;

  let errorsubject = false;
  const design = document.getElementById('subject').style;
  
  if (letters.test(validation)) {
    document.getElementById('error-subject').style.display = "block";
    errorsubject = true;
  }
  else {
    document.getElementById('error-subject').style.display = "none";
  }
  if (errorsubject) {
    design.border = "solid 2px red";
    design.background = "#ffdddd";
    design.outline = "2px solid red"
  }
  else {
    design.border = "2px solid #5E61E6"
    design.background = "white"
    design.outline = "2px solid #5E61E6"
  }
}

function validateMessage(validation) {
  const letters = /^[0-9\s]*$/g;

  let errorsubject = false;
  const design = document.getElementById('message').style;
  
  if (letters.test(validation)) {
    document.getElementById('error-message').style.display = "block";
    errorsubject = true;
  }
  else {
    document.getElementById('error-message').style.display = "none";
  }
  if (errorsubject) {
    design.border = "solid 2px red";
    design.background = "#ffdddd";
    design.outline = "2px solid red"
  }
  else {
    design.border = "2px solid #5E61E6"
    design.background = "white"
    design.outline = "2px solid #5E61E6"
  }
}
  const [valoresNome, setNameValue] = useState('')
  const [valoresMotivo, setSubjectValue] = useState('')
  const [valoresEmail, setEmailValue] = useState('')
  const [valoresMensagem, setMessageValue] = useState('')

  return(
  <>
    <Header>
      <p><a href="#">Home</a>/ Contato ejsujsjejuejsjusjuj</p>
      <h1>CONTATO</h1>
    </Header>
    <main className='all'>
      <section className='infos'>
        <section className="t1">
          <h1 className="t1-title">Fale Conosco</h1>
          <div className="t1-1">
            <h2 className="t1-subtitle">Venha nos Visitar!</h2>
            <p className="t1-text">Rua Irineu José Bordon, 335 05120-060 - Vila Jaguara - São Paulo</p>
            <p className="t1-text">Tel.: (11) 3623-6000</p>
          </div>
          <div className="t1-2">  
            <h2 className="t1-subtitle">Informações pedagógicas da Escola Germinare</h2>
            <p className="t1-text">comunicacao@germinare.org.br</p>
          </div>
          <div className="t1-3">
            <h2 className="t1-subtitle">Informações sobre Doações e Apoio para a Escola Germinare</h2>
            <p className="t1-text">instituto@germinare.org.br</p>
          </div>
          <div className="t1-4">
            <h2 className="t1-subtitle">Contato Imprensa e Relações Institucionais</h2>
            <p className="t1-text">instituto@germinare.org.br</p>
          </div>
          <div className="t1-5">
            <h2 className="t1-subtitle">Contato Processo de Admissão</h2>
            <p className="t1-text">admissao@germinare.org.br</p>
          </div>
          <div className="t1-6">
            <h2 className="t1-subtitle">Ouvidoria</h2>
            <p className="t1-text">ouvidoria@germinare.org.br</p>
          </div>
          <div className="t1-7">
            <h2 className="t1-subtitle">Canal de Ética</h2>
            <p className="t1-text">Como forma de amparar colaboradores, clientes e fornecedores em situações de exposição a falhas éticas ou práticas e comportamentos inadequados, disponibilizamos  o canal de ética da J&F para a realização de relatos de forma anônima e segura. Ao acessar a plataforma do Compliance do Grupo J&F, preencha as informações necessárias e marque "Escola Germinare" como local de relato. A área responsável tratará as denúncias individualmente!</p>
          </div>
        </section>
          <section className="media">
            <img src={image} alt="Diretoras pedagógica e psicóloga recebendo alunas" className="image" />
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.65912199965962!2d-46.73203770541648!3d-23.512858447443502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8dcf5efb1cd%3A0xcc322969008a3e57!2sInstituto%20Germinare!5e0!3m2!1spt-BR!2sbr!4v1635961467984!5m2!1spt-BR!2sbr" width="500" height="335" allowfullscreen="" loading="lazy"></iframe>
          </section>
        </section>
        <section className="form">
          <h1 className="form-title">Formulário de Contato</h1>
          <form id='formjs' onSubmit={recebeData}>
            <div class="form-container">
              <input 
              value={valoresNome} 
              onChange= {(e) => {validateName(e.target.value);setNameValue(e.target.value)}} 
              type="text" 
              className="form-controller" 
              id='name' 
              placeholder="Digite seu nome" 
              required/>
              <span id="error-name">O nome não pode conter caracteres especiais (números).</span>
              <span id="error-surname">Sobrenome é necessário.</span>
            </div>
            <div class="form-container">
              <input 
              value={valoresEmail} 
              onChange= {(e) => {validateEmail(e.target.value);setEmailValue(e.target.value)}} 
              id="email"
              type="email" 
              className="form-controller" 
              placeholder="Digite seu e-mail" 
              required/>
              <span id="error-email">É necessário incluir um @ e conteúdo após o @.</span>
            </div>
            <div class="form-container">
              <input 
              onChange= {(e) => {validateSubject(e.target.value);setSubjectValue(e.target.value)}} 
              value={valoresMotivo} 
              id="subject" 
              type="text" 
              name="motivo" 
              className="form-controller" 
              placeholder="Digite o motivo do contato" 
              required/>
              <span id="error-subject">É necessário pelo menos uma letra.</span>
            </div>
              <div class="form-container">
              <textarea 
              value={valoresMensagem} 
              onChange= {(e) => {validateMessage(e.target.value);setMessageValue(e.target.value)}} 
              className="form-controller message"
              id="message"
              cols="40" 
              rows="10" 
              placeholder="Digite sua mensagem" 
              required></textarea>
              <span id="error-message">É necessário pelo menos uma letra.</span>
            </div>					
            <div className="buttons">
              <button onClick={cleanForm} value="Reset" className="buttonLimpar">Limpar</button>
              <button type="submit" className="buttonEnviar">Enviar</button>
            </div>
        </form>
      </section>
    </main>
  </>
  )
}

export default Contato