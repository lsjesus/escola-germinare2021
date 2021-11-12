import './style.css'
import {Header} from './Header'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const LGPD = ()=>{
    const [isActive, setActive] = useState("true"); 
    const [isSecActive, setSecActive] = useState("true"); 

    const ToggleClass = () => {
        setActive(!isActive);
    }
    const SecToggleClass = () => {
        setSecActive(!isSecActive);
    }

    const classActual = ()=>{return !isActive ? "aberto" : "null"};
    const classSecActual = ()=>{return !isSecActive ? "aberto" : "null"};

    return (
        <>
        <Header>
            <p>
                <Link to='/'>Home</Link>/ LGPD
            </p>
            <h1>LGPD</h1>
        </Header>
        <div className="red-rectangle"></div>
        <section className="lgpd">
            <h2>Nosso compromisso com Privacidade e Proteção de Dados</h2>
            <p> 
                Se você utiliza o nosso site, esta Política de Privacidade se aplica a VOCÊ. 
                <br/>Temos como nosso compromisso presevar a sua privacidade e proteger seus dados pessoais. Coletamos seus dados para prestar a você nossos serviços adequada e eficientemente.
            </p>
            <p className="outer-text">Tratamos quaisquer dados ou informações coletadas sobre você de forma  confidencial e apenas as utilizaremos para os fins descritos nessa Política de Privacidade e/ou autorizado por você, e buscamos redigir essa política de forma mais simples e acessível possível, para que você possa realizar uma leitura agradável e entender como realizamos o tratamento de seus dados. </p>
            <p>Caso você tenha qualquer dúvida sobre como tratamos seus dados ou sobre esta Política de Privacidade, entre em contato no nosso <Link to='/contact' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className="fale-conosco-link">fale conosco</Link>.</p>
            <h3>Listamos abaixo algumas das finalidades as quais poderemos tratar os seus dados pessoais:</h3>

            <div>
                <div className="wrapper-data-lgpd">
                    <button className="v-btn-wrapper" onClick={ToggleClass}>
                        <div className={`v-btn v-left ${classActual()}`}></div>
                        <div className={`v-btn v-middle ${classActual()}`}></div>
                        <div className={`v-btn v-right ${classActual()}`}></div>
                    </button>
                    <p>Dados para realizar o processo de admissão dos candidatos</p>
                </div>
                <ul className={`data-box adm-data ${classActual()}`}>
                    <li>Nome</li>
                    <li>Nome social</li>
                    <li>E-mail</li>
                    <li>Sexo</li>
                    <li>Data de nascimento</li>
                    <li>Número do CPF</li>
                    <li>Número do RG</li>
                    <li>Órgão Expedidor do RG</li>
                    <li>Endereço (CEP, rua, número, complemento, bairro, estado e cidade)</li>
                    <li>Escola onde está matriculado atualmente</li>
                    <li>Período</li>
                    <li>Tipo de Instituição</li>
                    <li>Informações de responsável legal (Parentesco, Nome Completo, CPF, Nome Social, Identificador Social - RG ou RNE, órgão Expedidor, Estado Emissor, Telefone Fixo, Celular e E-mail)</li>
                </ul>
            </div>

            <div>
                <div className="wrapper-data-lgpd">
                    <button className="v-btn-wrapper" onClick={SecToggleClass}>
                        <div className={`v-btn v-left ${classSecActual()}`}></div>
                        <div className={`v-btn v-middle ${classSecActual()}`}></div>
                        <div className={`v-btn v-right ${classSecActual()}`}></div>
                    </button>
                    <p>Cookies inclusos em nosso site</p>
                </div>
                <div className={`data-box cookies ${classSecActual()}`}>
                    <p>
                        Cookies estão inclusos em nossos sites para distinguir usuários únicos, atribuindo um número gerao aleatoriamente como um identificador para calcular o acesso dos visitantes para relatórios analíticos, e poder entender melhor suas necessidades e interesses, oferecendo um melhor serviço ou informações relacionadas. Por padrão, ele é definido para expirar.
                    </p>
                </div>
            </div>
            <h3>Coleta de dados sensíveis e coleta de dados de menor</h3>
            <p>
                Em alguns casos, podemos realizar a coleta de alguns dados pessoais considerados como sensíveis ou que possa vir a revelar algum dado sensível. Nesses casos, apenas iremos realizar o tratamento desses dados de acordo com alguma das bases legais disponíveis no artigo 11 da LGPD.
                <br/>Além disso, também podemos coletar dados de menores de 12 anos. Nesses casos, sempre buscaremos a autorização de seu representante legal ou de um de seus pais, conforme regra presente no artigo 14 da LGPD.
            </p>
            <h3>A Escola Germinare compartilha meus dados com alguém?</h3>
            <p>A Escola não compartilha, vende ou transfere seus dados pessoais para nenhuma empresa ou individuo, exceto nas seguintes hipóteses:</p>
            <ul>
                <li>Hospedagem em plataformas de tecnologia de nossos parceiros;</li>
                <li>Cumprimento de legislações vigentes (por exemplo, ao Ministério da Educação – MEC e a Secretária da Educação do Estado de São Paulo);</li>
                <li>Disponibilidade de nossos serviços por meio de nosso site.</li>
            </ul>
            <h3>Quais são os seus direitos quanto a LGPD?</h3>
            <ul>
                <li>Acesso, existência de tratamento e informação;</li>
                <li>Retificação;</li>
                <li>Exclusão;</li>
                <li>Oposição ao processamento;</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados;</li>
                <li>Portabilidade de dados;</li>
                <li>Retirar o seu consentimento.</li>
            </ul>
            <p>Talvez seja necessário solicitar informações específicas suas para nos ajudar a confirmar sua identidade e garantir seu direitos. Esta é uma medida de segurança para garantir que os dados pessoais não sejam divulgados a qualquer pessoa que não tenha direito de recebê-los.</p>
        </section>
        </>
    )
}
export default LGPD