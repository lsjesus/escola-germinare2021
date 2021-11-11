import './style.css'
import kitchen from '../assets/a-le.png'
import {Header} from './Header'
import { Link } from 'react-router-dom'
const Gov = ()=>{
    return (
        <>
        <Header>
            <p>
                <Link to='/'>Home</Link>/ Governança
            </p>
            <h1>Governança</h1>
        </Header>  
        <section className="gov">
            <p>
                O modelo de Governança Corporativa da Escola Germinare, instituição sem fins lucrativos, visa atender aos mais altos padrões de organizações públicas ou privadas como forma de orientar nossa atuação a partir das boas práticas do setor educacional. Nossas ações e nosso plano diretivo são orientados com base em nossa missão, crença e valores. Buscamos contribuir com a sociedade, oferecendo ensino de alta qualidade com o propósito de formar líderes em negócios, que serão os futuros gestores do nosso país. Além do ensino gratuito, os alunos recebem refeições diárias, uniforme e todo o material didático.

                <br/><br/>Como forma de manter a transparência junto a sociedade e apoiadores, publicamos abaixo os demonstrativos financeiros da Escola Germinare:
            </p>
            <div>
                <div>
                    <a target="_blank" href="http://www.escolagerminare.org.br/pdf/2010.pdf">Demonstrativo Financeiro 2010</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/pdf/2011.pdf">Demonstrativo Financeiro 2011</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Demonstrativo-Instituto2012.pdf">Demonstrativo Financeiro 2012</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/pdf/2013.pdf">Demonstrativo Financeiro 2013</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/pdf/2014.pdf">Demonstrativo Financeiro 2014</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/152593-Demonstra%C3%A7%C3%B5es-financeiras-31-12-2015-Instituto-Germinare_CLIENTE.pdf">Demonstrativo Financeiro 2015</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Demonstrac%CC%A7o%CC%83es-financeiras-31-12-2016-Instituto-Germinare-com-parecer.pdf">Demonstrativo Financeiro 2016</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/demonstrativo_Instituto-Germinare.pdf">Demonstrativo Financeiro 2017</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/demonstrativo_Instituto-Germinare.pdf">Demonstrativo Financeiro 2018</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/demonstrativo_Instituto-Germinare.pdf">Demonstrativo Financeiro 2019</a>
                    <a target="_blank" href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/1171-21_Relatorio-de-Auditoria-_Germinare_2020-3.pdf">Demonstrativo Financeiro 2020</a>
                </div>
                <img src={kitchen} alt="" />
            </div>
        </section>
        </>
    )
}
export default Gov