import './style.css'
import {Header} from './Header'
const LGPD = ()=>{
    return (
        <>
        <Header>
            <p>
                <a href="#">Home</a>/ Governança
            </p>
            <h1>Governança</h1>
        </Header>  
        <section className="lgpd">
            <h1>Nosso compromisso com Privacidade e Proteção de Dados</h1>
            <p> Se você utiliza o nosso site, esta Política de Privacidade se aplica a VOCÊ. 
                Temos como nosso compromisso presevar a sua privacidade e proteger seus dados pessoais. Coletamos seus dados para prestar a você nossos serviços adequada e eficientemente. 

                Tratamos quaisquer dados ou informações coletadas sobre você de forma  confidencial e apenas as utilizaremos para os fins descritos nessa Política de Privacidade e/ou autorizado por você, e buscamos redigir essa política de forma mais simples e acessível possível, para que você possa realizar uma leitura agradável e entender como realizamos o tratamento de seus dados. 

                Caso você tenha qualquer dúvida sobre como tratamos seus dados ou sobre esta Política de Privacidade, entre em contato no nosso fale conosco.</p>
            <h2>Listamos abaixo algumas das finalidades as quais poderemos tratar os seus dados pessoais:</h2>

            <div className="wrapper-data-lgpd">
                <button className="v-btn-wrapper">
                    <div className="v-btn v-left"></div>
                    <div className="v-btn v-middle"></div>
                    <div className="v-btn v-right"></div>
                </button>
                <p>Dados para realizar o processo de admissão dos candidatos</p>
            </div>

        </section>
        </>
    )
}
export default LGPD