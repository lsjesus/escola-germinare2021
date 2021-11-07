import './style.css'
import { Header } from './Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GiClick } from 'react-icons/gi'
const Estagios = ()=>{
    window.addEventListener('load', function() {AOS.init()})
    return(
        <>
        <Header>
            <p>
                <a href="#">Home</a>/ Estágios
            </p>
            <h1>Estágios</h1>
        </Header>     
        <section className="estagios">
            <p className="estagios-txt">A escola Germinare tem como missão formar jovens administradores de empresas e cidadãos. Para isso, oferece aos alunos aulas de gestão sobre as diferentes áreas das empresas, abrangendo todas as habilidades e competências importantes na sua formação. Em complemento a estas matérias, a escola possui aulas lecionadas por profissionais das empresas do grupo J&F, com o objetivo de exemplificar o dia a dia no trabalho e expandir o conhecimento dos alunos. Porém, a Germinare acredita que a base teórica só faz sentido se acompanhada da prática, e, por isso, criou um projeto acadêmico com os <strong>estágios remunerados</strong>, que os interliga e garante a formação de profissionais capacitados para o ambiente de trabalho. Os alunos iniciam os estágios no 2º semestre do 9º ano.
            </p>
            <p className="estagios-txt confira-estagios">Confira, abaixo, detalhes sobre cada um desses estágios.</p>
            <div className="estagios-section">
                <div className="estagios-container lider"  data-aos='fade-down'>
                    <div className='format-estagios-container'>
                        <GiClick className='hand-icon' />
                        <h1 className="estagios-name">Líder de Vendas</h1>
                        <p className="estagios-description">Nessa fase inicial, os alunos atuam como vendedores nas lojas Swift, exercendo as atividades de atendimento ao cliente e organização da loja. Como primeiro emprego, essa etapa agrega muito conhecimento e experiência prática à vida dos jovens, fazendo com que tenham mais desenvoltura e tino comercial para argumentar com os clientes e vender os produtos. O objetivo desse estágio é fazer com que os alunos entendam a base operacional de uma grande empresa.</p>
                    </div>
                </div>
                <div className="estagios-container vendedor" data-aos='zoom-in-down' data-aos-duration='1000'>
                    <div className='format-estagios-container' >
                        <GiClick className='hand-icon' />
                        <h1 className="estagios-name">Vendedor Externo</h1>
                        <p className="estagios-description">Já adaptados ao ambiente empresarial, os alunos iniciam o 2° estágio com as vendas externas para pequenos e médios varejos. Nesse momento, adquirem habilidades de negociação e aprimoram o tino comercial já estabelecido no estágio anterior, visto que visitam seus clientes varejistas e constroem uma relação de vendas sólida e transparente. O estágio de vendas externas foi estipulado para gerar autonomia e responsabilidade nos alunos, para que criem a independência necessária para um gestor de sucesso.</p>
                    </div>
                </div>
                <div className="estagios-container gerente" data-aos='zoom-in-down' data-aos-duration='1000'>
                    <div className='format-estagios-container'>
                        <GiClick className='hand-icon' />
                        <h1 className="estagios-name">Gerente de Loja</h1>
                        <p className="estagios-description">Após as experiências de vendas, os alunos vão gerir uma loja e assumir uma equipe de funcionários. Nessa etapa, o estudante integra todos os conhecimentos e habilidades adquiridos durante os estágios e aulas e aplica no gerenciamento de uma das unidades das lojas Swift, com a função de comandar e motivar a equipe para o atingimento das metas da companhia.  Essa fase tem como principal objetivo fazer com que o aluno coloque em prática todos os conhecimentos adquiridos durante os anos na Germinare e conquiste crescimento profissional com as habilidades desenvolvidas.</p>
                    </div>
                </div>
                <div className="estagios-container programador" data-aos='zoom-in-down' data-aos-duration='1000'>
                    <div className='format-estagios-container'>
                        <GiClick className='hand-icon' />
                        <h1 className="estagios-name">Programador</h1>
                        <p className="estagios-description">Os alunos que escolherem e tiverem habilidades para a área de Tecnologia, têm a oportunidade de aplicar os conhecimentos de programação dentro do maior aplicativo de pagamentos do Brasil. Após passar pela área de operações do PicPay, os alunos aplicam o que aprendem sobre desenvolvimento de sistemas, experiência do usuário e gestão da tecnologia na prática. Todos os estudantes da Germinare, possuem aulas de tecnologia desde o sexto ano do fundamental, tendo como base: Programação em Python, HTML, CSS, JavaScript e análise de dados. </p>
                    </div>
                </div>
                <div className="estagios-container financeiro" data-aos='zoom-in-down' data-aos-duration='1000'>
                    <div className='format-estagios-container'>
                        <GiClick className='hand-icon' />
                        <h1 className="estagios-name">Profissional Financeiro</h1>
                        <p className="estagios-description">Podendo escolher ter uma vivência profissional totalmente diferente das trilhas de bens de consumo, os alunos do 9° ano e do 1° podem optar por iniciar uma jornada de trabalho no Banco Original. De forma bem dinâmica e educativa, passarão por até 12 áreas diferentes dentro do segmento de varejo, onde vivenciarão as rotinas e se aprofundarão no dia a dia do mercado financeiro. Esse estágio tem como objetivo desenvolver habilidades técnicas e analíticas, estimulando a visão 360° e aprimorando o perfil de gestor financeiro.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Estagios