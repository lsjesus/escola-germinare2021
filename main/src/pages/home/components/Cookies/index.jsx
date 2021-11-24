import './style.css'
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io'
const Cookies = ()=>{
    function validateCookies() {
        document.getElementById('cookie-id').style.display = "none";
    }
    return(
        <div class="cookie-overlay" id="cookie-id">

        <div class="cookie-flex">
        
            <h1 class="cookie-title">Privacidade & Cookies <IoIosCloseCircleOutline className="cookie-icon" onClick={validateCookies}/></h1>

            <p class="cookie-text">Para melhorar a sua experiência em nossos serviços e recomendar conteúdo de seu interesse, nós utilizamos cookies e tecnologias semelhantes. Ao aceitar, você concorda com a nossa Política de Privacidade.</p>
            
        </div>

        <div class="cookie-media">

        <Link to='/lgpd' className="cookie-a" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Saiba mais</Link>

        <button onClick={validateCookies} class="accept-cookies">Aceitar</button>

    </div>

    </div>
    )
}
export default Cookies