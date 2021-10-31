import './style.css'
import studentLooking from '../assets/studentLooking.png'
const ComeMakeHistory = ()=>{
    return(
        <section className="come-make-history">
            <div className="first-content-container">
                <img src={studentLooking} alt="" />
                <div>
                    <h1>Venha fazer parte da nossa história!</h1>
                    <p>A Escola Germinare forma jovens líderes de negócios de alta performance preparados para a sociedade e o mercado de trabalho. Participe do processo de admissão 2021/2022.</p>
                    <a>Inscreva-se</a>
                </div>
            </div>
            <div className="second-content-container">
                <div>
                    <h1>Seja um Amigo Germinare</h1>
                    <p>Saiba mais como apoiar o projeto Germinare. </p>
                    <a>Saiba mais</a>
                </div>
                <div>
                    <h1>Jovem Executivo</h1>
                    <p>Saiba mais sobre o projeto acadêmico da Escola Germinare.</p>
                    <a>Saiba mais</a>
                </div>
            </div>
        </section>
    )
}
export default ComeMakeHistory