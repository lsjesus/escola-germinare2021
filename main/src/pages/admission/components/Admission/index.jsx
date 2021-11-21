import alunos from '../../assets/alunos.png'
import './style.css'
import {Header} from '../../../../components/Title-2/Header'
import { Link } from 'react-router-dom'
const Main = ()=>{
    return(
        <>
        <Header>
            <p>
                <Link to='/' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Home</Link>/ Processo de Admissão 2021/2022
            </p>
            <h1>Processo de Admissão 2021/2022</h1>
        </Header> 
        <main className='main'>
             
            <div className= 'container-adm'>
                <div className= 'info'>
                    <p className= 'paragrafo'>A lista de convocados para a segunda etapa do Processo de Admissão 2021/2022 está disponível! <a href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Lista-de-Convocados-2%C2%B0-Etapa-2021-2022.pdf" className='link' target='_blank'>Clique aqui</a></p>
                    <p className= 'paragrafo'>Aos convocados para a segunda fase, informamos que todas as entrevistas serão realizadas de modo presencial com candidatos e responsáveis.</p>
                    <p className= 'paragrafo'>As respectivas datas e horários serão enviados por e-mail e disponibilizados na Área do Candidato em breve.</p>
                    <p className= 'paragrafo'>Lembrando que, conforme o calendário escolar, não haverá expediente nos dias 06 e 07 de setembro de 2021. As atividades serão retomadas dia 08 de setembro (quarta-feira).</p>
                    <p className= 'paragrafo'>Para mais informações acesse o <a href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Manual-Geral-Site.pdf" className='link' target='_blank'>Manual do candidato 2021/2022</a></p>
                    <p className= 'paragrafo'>As etapas do processo de seleção serão descritas no a Manual do Candidato. Acompanhe-nos nas redes sociais para não perder as próximas atualizações!</p>
                </div>
                <img src={alunos} alt="Alunos na escada" className='alunos' />
            </div>
        </main>
        </>
        
    )
}
export default Main