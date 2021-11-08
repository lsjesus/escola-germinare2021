import logo from '../assets/logo-novo-branco-oficial.png'
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './style.css'
import { Link } from 'react-router-dom'
const Footer = ()=>{
    return(
        <footer className='footer'>
            <Link to='/'><img src={logo} alt="Logo Oficial Germinare" className='logo-footer' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}/></Link>
            <ul className='footer-menu'>
                        <Link to='/admission' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                            <li className='item-footer'>Admissão 2021/2022</li>
                        </Link>
                        <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                            <li className='item-footer'>Doação</li>
                        </Link>
                        <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                            <li className='item-footer'>Contato</li>
                        </Link>
                        <li className='item-footer about-us-li'>
                            Sobre nós
                            <ul className='about-us-footer'>
                                <Link to='/values' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                                    <li className='item-footer'>Valores</li>
                                </Link>
                                <Link to='/internship' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                                    <li className='item-footer'>Estágios</li>
                                </Link>
                                <Link to='/certificates' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                                    <li className='item-footer'>Certificados</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                                    <li className='item-footer'>Governança</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                                    <li className='item-footer'>Projeto Acadêmico</li>
                                </Link>
                            </ul>
                        </li>
                        <li className='item-footer collaborator-li-footer'>
                            Acesso
                            <ul className='collaborator-footer'>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                                    <li className='item-footer'>Minha biblioteca</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                                    <li className='item-footer'>Agenda Edu</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>
                                    <li className='item-footer'>Árvore de livros</li>
                                </Link>
                            </ul>
                        </li>
                        <li className='social'>
                            Acompanhe-nos
                            <ul className="social-icons">
                                <a href='https://www.facebook.com/germinareoficial' target='_blank' className='link-social'>
                                    <li className="social-icon"><FaFacebook/></li>
                                </a>
                                <a href='https://www.youtube.com/channel/UCtfT0wIFhW2jyCMR0ZtBuzg' target='_blank' className='link-social'>
                                    <li className="social-icon"><FaYoutube/></li>
                                </a>
                                <a href='https://www.linkedin.com/company/instituto-germinare/?trk=top_nav_home' target='_blank' className='link-social'>
                                    <li className="social-icon"><FaLinkedin/></li>
                                </a>
                                <a href='https://www.instagram.com/escolagerminare/' target='_blank' className='link-social'>
                                    <li className="social-icon"><RiInstagramFill/></li>
                                </a>
                            </ul>
                        </li>

            </ul>

            <h1 className='footer-line'>Escola Germinare – Escola de Negócios © 2021</h1>
            
        </footer>
    )
}
export default Footer