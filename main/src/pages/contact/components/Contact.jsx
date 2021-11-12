import './style.css'
import image from '../assets/imagem.jpeg'
import {Header} from './Header'

const Model = ()=>{
  function cleanForm(event) {
    event.preventDefault()
    document.getElementById("formjs").reset();
  }
  return(
  <>
      <Header>
    <p>
      <a href="#">Home</a>/ Contato
    </p>
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
          <img src={image} alt="" className="image" />
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.65912199965962!2d-46.73203770541648!3d-23.512858447443502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8dcf5efb1cd%3A0xcc322969008a3e57!2sInstituto%20Germinare!5e0!3m2!1spt-BR!2sbr!4v1635961467984!5m2!1spt-BR!2sbr" width="500" height="335" allowfullscreen="" loading="lazy"></iframe>
        </section>
      </section>
			<section className="form">
        <h1 className="form-title">Formulário de Contato</h1>
        <form id='formjs' >
          <div class="form-container">
            <input type="text" className="form-control" placeholder="Digite seu nome (obrigatório)" required/>
          </div>
					<div class="form-container">
            <input type="email" className="form-control" placeholder="Digite seu e-mail (obrigatório)" required/>
          </div>
					<div class="form-container">
            <input onSubmit={()=>{console.log('a')}} type="text" name="motivo" className="form-control" placeholder="Digite o motivo do contato (obrigatório)" required/>
          </div>
					<div class="form-container">
          <textarea className="form-control message" cols="40" rows="10" placeholder="Digite sua mensagem"></textarea>
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

export default Model