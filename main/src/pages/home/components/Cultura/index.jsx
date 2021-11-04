import './style.css'
import valorespq from '../../assets/valores-pq.png'
import alunos from '../../assets/alunos-cultura.png'
const Cultura = ()=>{
    return(
        <section className="cultura">
            <div className="title-container-cultura">
                <h1 className='cultura-title'>Cultura</h1>
                <img src={valorespq} alt="valores" className="valorespq" />
            </div>
            <div className="container-cards-img">
                <img src={alunos} alt="alunos germinare" className="alunos-cultura" />
                <div className="cards-cultura">
                    <div className="card-cultura" data-aos="fade-right" data-aos-duration="500">
                        <div className="format-card">
                            <h1 className="card-cultura-title">Missão</h1>
                            <p className="card-cultura-conteudo">Formar jovens administradores de empresas e cidadãos.</p>
                        </div>
                    </div>
                    <div className="card-cultura" data-aos="fade-right" data-aos-duration="1000">
                        <div className="format-card">
                            <h1 className="card-cultura-title">Crenças</h1>
                            <ul className="card-cultura-list">
                                <li className="item-card-list">Foco no detalhe </li>
                                <li className="item-card-list">Mão na massa </li>
                                <li className="item-card-list">As coisas só são conquistadas com muito trabalho </li>
                                <li className="item-card-list">Pessoa certa no lugar certo </li>
                                <li className="item-card-list">Paixão pelo que faz </li>
                                <li className="item-card-list">Atitude é mais importante que conhecimento </li>
                                <li className="item-card-list">Líder é quem tem que conquistar seus liderados </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-cultura" data-aos="fade-right" data-aos-duration="1500">
                        <div className="card-valores format-card">
                            <h1 className="card-cultura-title">Valores</h1>
                            <ul className="card-cultura-list">
                                <li className="item-card-list">Atitude de Dono</li>
                                <li className="item-card-list">Determinação </li>
                                <li className="item-card-list">Disciplina </li>
                                <li className="item-card-list">Disponibilidade</li>
                                <li className="item-card-list">Simplicidade </li>
                                <li className="item-card-list">Franqueza</li>
                                <li className="item-card-list">Humildade</li>
                            </ul>
                            <p className="valores-card-cultura">Quer saber mais sobre nossos valores? <a href="" className='link-valores'>Clique aqui</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cultura