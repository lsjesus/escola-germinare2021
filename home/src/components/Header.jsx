import logo from '../assets/logo-germinare.png'
import './style.css'
import {FiChevronDown} from 'react-icons/fi'
const Header = ()=>{
    return(
        <header className='header'>
            <img src={logo} alt="Logo Escola Germinare" className='logo'/>
            <nav className='navigation'>
                <ul className='menu'>
                    <li className='item-menu'>Admissão 2021/2022</li>
                    <li className='item-menu'>Doação</li>
                    <li className='item-menu'>Contato</li>
                    <li className='item-menu'>
                        Sobre nós <FiChevronDown size={20}/>
                        <ul className='about-us'>
                            <li className='item-menu'>Valores</li>
                            <li className='item-menu'>Estágios</li>
                            <li className='item-menu'>Certificados</li>
                            <li className='item-menu'>Governança</li>
                            <li className='item-menu'>Projeto Acadêmico</li>
                        </ul>
                    </li>
                    <li className='item-menu'>
                        Colaborador <FiChevronDown/>
                        <ul className='collaborator'>
                            <li className='item-menu'>Minha biblioteca</li>
                            <li className='item-menu'>Agenda Edu</li>
                            <li className='item-menu'>Árvore de livros</li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
export default Header