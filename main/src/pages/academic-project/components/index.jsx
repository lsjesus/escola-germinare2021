import './style.css'
import {Header} from './Header'
import { Link } from 'react-router-dom'
const AcademicProject = ()=>{
    return (
        <>
        <Header>
            <p>
                <Link to='/' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Home</Link>/ Projeto Acadêmico
            </p>
            <h1>Projeto Acadêmico</h1>
        </Header>  
        <section className="academic-project">
            <p style={{lineHeight: '125%'}}>
                A escola Germinare tem como missão formar jovens administradores de empresas e cidadãos por meio de uma educação única e inteiramente gratuita. É uma instituição aprovada pelo MEC – Ministério da Educação – e reconhecida pela UNESCO. <br/><br/>
                O foco principal é formar de maneira efetiva jovens gestores e líderes para o mercado de trabalho, oferecendo ampla preparação com conteúdos dirigidos ao desenvolvimento de habilidades profissionais e a oportunidade de especialização escolhida entre os seguintes negócios: digital, financeiro, varejo, commodities e bens de consumo.<br/><br/>
                Disciplinas distribuídas em áres de conhecimento e academias:
            </p>
            <div className="dicipline-container-wrapper">
                <div className="discipline-container">
                    <h1>Linguagens e códigos</h1>
                    <hr />
                    <ul>
                        <li>Português</li>
                        <li>Inglês</li>
                        <li>Condicionamen&shy;to Físico</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Matemática</h1>
                    <hr />
                    <ul>
                        <li>Matemática</li>
                        <li>Geometria</li>
                        <li>Lógico</li>
                        <li>Estatística</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Ciências da Natureza</h1>
                    <hr />
                    <ul>
                        <li>Ciências</li>
                        <li>Biologia</li>
                        <li>Física</li>
                        <li>Química</li>
                        <li>Pessoas</li>
                        <li>Orientação de Estudos</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Ciências Humanas</h1>
                    <hr />
                    <ul>
                        <li>Geografia</li>
                        <li>História</li>
                        <li>Filosofia</li>
                        <li>Sociologia</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Controladoria</h1>
                    <hr />
                    <ul>
                        <li>Contabilidade</li>
                        <li>Fiscal</li>
                        <li>Jurídico</li>
                        <li>Infomática</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Mercado de Capitais</h1>
                    <hr />
                    <ul>
                        <li>Mercado de Capitais</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Academia Seara/Flora</h1>
                    <hr />
                    <ul>
                        <li>Arte/Marketing/<wbr/>Marcas</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Academia Original</h1>
                    <hr />
                    <ul>
                        <li>Gestão de Portfólio</li>
                        <li>Crédito Pessoa Física</li>
                        <li>Crédito Pessoa Jurídica</li>
                        <li>Seguros</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Academia PicPay</h1>
                    <hr />
                    <ul>
                        <li>Tecnologia da Informação - TI</li>
                        <li>Experiência do Usuário - UX</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Academia Friboi</h1>
                    <hr />
                    <ul>
                        <li>Adminsitração Comercial</li>
                        <li>Planejamento e Produção</li>
                    </ul>
                </div>
                <div className="discipline-container">
                    <h1>Academia <br/>Swift</h1>
                    <hr />
                    <ul>
                        <li>Atendimento ao Cliente</li>
                        <li>Varejo</li>
                        <li>Vendas B2B</li>
                    </ul>
                </div>   
            </div>

            <p style={{lineHeight: '125%'}}>
                O currículo também prevê uma carga intensa voltada para o inglês, pois acredita-se que para a formação de um gestor em negócios, a fluência neste idioma é essencial.<br/><br/>
                Desse modo, um dos pilares centrais do projeto é não subestimar os jovens, por isso os alunos iniciam estágios já no segundo semestre do 9º ano, como forma de aplicar no mundo empresarial os conhecimentos adquiridos em sala de aula. Esta é uma das estratégias da escola para que que os alunos tomem conhecimentos e demandas do mundo real, interessem-se, entendam a importância e dediquem-se para superar as expectativas.<br/><br/>
                A partir do ano de 2015, o Ensino Médio tornou-se técnico. Assim, os alunos, ao término do 3º ano do Ensino Médio, receberão um certificado de Técnico em Administração de empresas.
            </p>

        </section>
        </>
    )
}
export default AcademicProject