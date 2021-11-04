import alunos from '../../assets/alunos.png'
import './style-main.css'
const Main = ()=>{
    return(
        <main className='main'>
            <p className= 'navegacao'> <span id='home'>Home</span>  / Processo de admissão 2021/2022</p>
            <h1 className= 'title'>PROCESSO DE ADMISSÃO 2021/2022</h1>
            <div className= 'container'>
                <div className= 'info'>
                    <p className= 'paragrafo'>A lista de convocados para a segunda etapa do Processo de Admissão 2021/2022 está disponível! <a href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Lista-de-Convocados-2%C2%B0-Etapa-2021-2022.pdf" className='link'>Clique aqui</a></p>
                    <p className= 'paragrafo'>Aos convocados para a segunda fase, informamos que todas as entrevistas serão realizadas de modo presencial com candidatos e responsáveis.</p>
                    <p className= 'paragrafo'>As respectivas datas e horários serão enviados por e-mail e disponibilizados na Área do Candidato em breve.</p>
                    <p className= 'paragrafo'>Lembrando que, conforme o calendário escolar, não haverá expediente nos dias 06 e 07 de setembro de 2021. As atividades serão retomadas dia 08 de setembro (quarta-feira).</p>
                    <p className= 'paragrafo'>Para mais informações acesse o <a href="http://www.escolagerminare.org.br/wp-content/uploads/2015/08/Manual-Geral-Site.pdf" className='link'>Manual do candidato 2021/2022</a></p>
                    <p className= 'paragrafo'>As etapas do processo de seleção serão descritas no a Manual do Candidato. Acompanhe-nos nas redes sociais para não perder as próximas atualizações!</p>
                </div>
                <img src={alunos} alt="Alunos na escada" className='alunos' />
            </div>
        </main>
        
    )
}
export default Main