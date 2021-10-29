import '../styles/global.css'
import './style.css'
import classroom from '../assets/classroom.png'

import AboutUsData from './subcomponent/AboutUsData'

const AboutOurSchool = ()=>{
    return(
        <section className="about-our-school"> 
            <div className="top-content">
                <img src={classroom} className="classroom-img" alt="Foto de sala de aula" />
                <div className="top-content-text">
                    <img src={classroom} className="classroom-img" alt="Foto de sala de aula" />
                    <h1>Sobre a nossa escola</h1>
                    <p>
                        A Escola de Negócios Germinare é uma entidade sem fins lucrativos voltada a alunos do 6º ano do Ensino Fundamental II ao 3º ano do Ensino Médio  e oferece ensino integral gratuito a todos os alunos. Além das aulas, os alunos recebem uniforme, material didático e refeições totalmente gratuitas.
                    </p>
                    <AboutUsData/>
                    <p>
                        Para conquistar níveis de excelência, a Escola Germinare segue a missão de formar, de maneira efetiva, jovens administradores de empresa que tenham total aderência aos valores da companhia com alta capacidade de liderança, aguçado tino comercial e competência para produzir resultados superlativos e por isso, proporciona os meios para que os alunos possam desenvolver as suas habilidades pessoais e intelectuais que ajudarão a encarar os desafios profissionais e coletivos e, assim, aprendem a gestão de negócios na prática, por meio de projetos, estágios e vivências nas empresas e indústrias, a fim de alcançarem uma formação mais completa.
                    </p>
                </div>
            </div>
            <AboutUsData/>
        </section>
    )
}
export default AboutOurSchool