import './style.css'
import valueImg from '../assets/joao-neto.png'
import { Header } from './Header'
import { Link } from 'react-router-dom'
const Value = ()=>{
    return(
        <>
        <Header>
            <p>
                <Link to='/' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Home</Link>/ Valores
            </p>
            <h1>Valores</h1>
        </Header>     
        <section className="value">
            <img src={valueImg} alt="" />
            <fieldset>
                <legend className="atitude-de-dono">Atitude de dono</legend>
                <p>Comprometido com o resultado, conhece com profundidade aquilo que faz e tem a visão do todo. Age com obstinação, disciplina e foco no detalhe. É mão na massa, busca sempre ser o melhor naquilo que faz e não desiste nunca. Está sempre disponível e dá o exemplo. Indigna-se, não se conforma, não fica quieto nem se omite quando vê algo que não funciona bem ou possa ser melhorado. É atento aos gastos e à economia de cada centavo. Está engajado com a cultura da organização.</p>
            </fieldset>
            <fieldset>
                <legend className="determinacao">Determinação</legend>
                <p>É obstinado, entrega resultados superiores e cumpre seus compromissos. Faz as coisas acontecerem, busca alternativas para os problemas e engaja as pessoas em prol de um objetivo comum. Tem senso de urgência, atitude de dono e não desiste nunca.</p>
            </fieldset>
            <fieldset>
                <legend className="disciplina">Disciplina</legend>
                <p>Cumpre o combinado, é pontual com horário e seus compromissos. Executa suas tarefas de forma disciplinada. É focado, pragmático, otimiza o tempo, atividades e recursos. Entrega resultados, não cria justificativas e desculpas.</p>
            </fieldset>
            <fieldset>
                <legend className="disponibilidade">Disponibilidade</legend>
                <p>É receptivo, acessível, disponível, não tem dia e não tem hora, está sempre pronto e tem o trabalho como prioridade. Está aberto ao novo, às mudanças e motivado para novos desafios.</p>
            </fieldset>
            <fieldset>
                <legend className="simplicidade">Simplicidade</legend>
                <p>Faz as coisas acontecerem de forma simples e prática, é mão na massa, vai direto ao ponto, descomplica e desburocratiza respeitando as normas.</p>
            </fieldset>
            <fieldset>
                <legend className="franqueza">Franqueza</legend>
                <p>É direto, sincero, verdadeiro e transparente em suas relações, sempre com respeito, de forma positiva, agregadora e acolhedora. Não se omite, expressa suas opiniões mesmo quando contrária aos demais. Sabe dizer não.</p>
            </fieldset>
            <fieldset>
                <legend className="humildade">Humildade</legend>
                <p>É direto, sincero, verdadeiro e transparente em suas relações, sempre com respeito, de forma positiva, agregadora e acolhedora. Não se omite, expressa suas opiniões mesmo quando contrária aos demais. Sabe dizer não.</p>
            </fieldset>
        </section>
        </>
    )
}
export default Value