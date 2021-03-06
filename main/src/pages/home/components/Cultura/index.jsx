import './style.css'
import valorespq from '../../assets/valores-pq.png'
import alunos from '../../assets/alunos-cultura.png'
import { Link } from 'react-router-dom'
const Cultura = ()=>{
    return(
        <section className="cultura">
            <h1 className="hr-cultura" data-aos='fade-right' data-aos-duration='1700' data-aos-ease='ease-in-out'></h1>
            <div className="title-container-cultura">
                <h1 className='cultura-title'>Cultura</h1>
                
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
                            <p className="valores-card-cultura">Quer saber mais sobre nossos valores? <Link to='/values' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-valores'>Clique aqui</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cultura