import logo from '../../../assets/logo-novo-branco-oficial.png'
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './style-footer.css'
const Footer = ()=>{
    return(
        <footer className='footer'>
            <img src={logo} alt="Logo Oficial Germinare" className='logo-footer' />
            <ul className='footer-menu'>
                        <a href="">
                            <li className='item-footer'>Admissão 2021/2022</li>
                        </a>
                        <a href="">
                            <li className='item-footer'>Doação</li>
                        </a>
                        <a href="">
                            <li className='item-footer'>Contato</li>
                        </a>
                        <li className='item-footer about-us-li'>
                            Sobre nós
                            <ul className='about-us-footer'>
                                <a href="">
                                    <li className='item-footer'>Valores</li>
                                </a>
                                <a href="">
                                    <li className='item-footer'>Estágios</li>
                                </a>
                                <a href="">
                                    <li className='item-footer'>Certificados</li>
                                </a>
                                <a href="">
                                    <li className='item-footer'>Governança</li>
                                </a>
                                <a href="">
                                    <li className='item-footer'>Projeto Acadêmico</li>
                                </a>
                            </ul>
                        </li>
                        <li className='item-footer collaborator-li-footer'>
                            Login
                            <ul className='collaborator-footer'>
                                <a href="">
                                    <li className='item-footer'>Minha biblioteca</li>
                                </a>
                                <a href="">
                                    <li className='item-footer'>Agenda Edu</li>
                                </a>
                                <a href="">
                                    <li className='item-footer'>Árvore de livros</li>
                                </a>
                            </ul>
                        </li>
                        <li className='social'>
                            Acompanhe-nos
                            <ul className="social-icons">
                                <a href="" className='link-social'>
                                    <li className="social-icon"><FaFacebook/></li>
                                </a>
                                <a href="" className='link-social'>
                                    <li className="social-icon"><FaYoutube/></li>
                                </a>
                                <a href="" className='link-social'>
                                    <li className="social-icon"><FaLinkedin/></li>
                                </a>
                                <a href="" className='link-social'>
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