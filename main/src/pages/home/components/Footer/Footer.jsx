import logo from '../../assets/logo-novo-branco-oficial.png'
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './style-footer.css'
const Footer = ()=>{
    return(
        <footer className='footer footer-home'>
            <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} to='/'><img src={logo} alt="Logo Oficial Germinare" className='logo-footer' /></Link>
            <ul className='footer-menu'>
                        <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} to='/admission' className='link-footer'>
                            <li className='item-footer'>Admissão 2021/2022</li>
                        </Link>
                        <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer'>
                            <li className='item-footer'>Doação</li>
                        </Link>
                        <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer'>
                            <li className='item-footer'>Contato</li>
                        </Link>
                        <li className='item-footer about-us-li'>
                            Sobre nós
                            <ul className='about-us-footer'>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer' to='/values'>
                                    <li className='item-footer'>Valores</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer' to='/internship'>
                                    <li className='item-footer'>Estágios</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer'>
                                    <li className='item-footer'>Certificados</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer'>
                                    <li className='item-footer'>Governança</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer'>
                                    <li className='item-footer'>Projeto Acadêmico</li>
                                </Link>
                            </ul>
                        </li>
                        <li className='item-footer collaborator-li-footer'>
                            Login
                            <ul className='collaborator-footer'>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer'>
                                    <li className='item-footer'>Minha biblioteca</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer'>
                                    <li className='item-footer'>Agenda Edu</li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-footer'>
                                    <li className='item-footer'>Árvore de livros</li>
                                </Link>
                            </ul>
                        </li>
                        <li className='social'>
                            Acompanhe-nos
                            <ul className="social-icons">
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-social'>
                                    <li className="social-icon"><FaFacebook className='social-icon-child'/></li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-social'>
                                    <li className="social-icon"><FaYoutube className='social-icon-child'/></li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-social'>
                                    <li className="social-icon"><FaLinkedin className='social-icon-child' /></li>
                                </Link>
                                <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='link-social'>
                                    <li className="social-icon"><RiInstagramFill className='social-icon-child'/></li>
                                </Link>
                            </ul>
                        </li>

            </ul>

            <h1 className='footer-line'>Escola Germinare – Escola de Negócios © 2021</h1>
            
        </footer>
    )
}
export default Footer