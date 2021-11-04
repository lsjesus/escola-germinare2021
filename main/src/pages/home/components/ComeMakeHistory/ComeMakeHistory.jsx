import './style.css'
import studentLooking from '../../assets/student-looking.png'
import studentLookingSmall from '../../assets/student-looking-small.png'
import { Link } from 'react-router-dom'

const ComeMakeHistory = ()=>{
    return(
        <section className="come-make-history">
            <div className="first-content-container" data-aos='zoom-in-up' data-aos-duration='700' data-aos-easing="ease-in-out">
                <img src={studentLooking} alt="" />
                <div>
                    <h1>Venha fazer parte da nossa história!</h1>
                    <img src={studentLooking} alt="" />
                    <p>A Escola Germinare forma jovens líderes de negócios de alta performance preparados para a sociedade e o mercado de trabalho. Participe do processo de admissão 2021/2022.</p>
                    <Link to='/admission'>Inscreva-se</Link>
                </div>
            </div>
            <div className="second-content-container">
                <div>
                    <h1>Seja um Amigo Germinare</h1>
                    <p>Saiba mais como apoiar o projeto Germinare. </p>
                    <a href="#">Saiba mais</a>
                </div>
                <div>
                    <h1>Jovem Executivo</h1>
                    <p>Saiba mais sobre o projeto acadêmico da Escola Germinare.</p>
                    <a href="#">Saiba mais</a>
                </div>
            </div>
        </section>
    )
}
export default ComeMakeHistory