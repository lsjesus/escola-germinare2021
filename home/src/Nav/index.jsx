import './style.css'
import logo from '../assets/logo-germinare.png'
import {FiChevronsDown} from 'react-icons/fi'
import{FaLock} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const Nav = ()=>{
    const [isActive, setActive] = useState("true");
    const [isMenuActive, setMenuActive] = useState("true");
    const [isAboutActive, setAboutActive] = useState("true");
    const [isCollabActive, setCollabActive] = useState("true");
    
    const ToggleClass = () => {
        if (!isAboutActive) {toggleAboutClass()}
        if (!isCollabActive) {toggleCollabClass()}
        setActive(!isActive);
        setMenuActive(!isMenuActive);}
    const classActual = ()=>{return !isActive ? "aberto" : "null"};
    const menuActualClass = () => {return !isMenuActive ? "menu-aberto" : "null"}

    const toggleAboutClass = () => {setAboutActive(!isAboutActive);};
    const aboutClassActual = ()=>{return !isAboutActive ? "aberto" : "null"};

    const toggleCollabClass = () => {setCollabActive(!isCollabActive);};
    const collabClassActual = ()=>{return !isCollabActive ? "aberto" : "null"};

    return(
        <div className="nav-wrapper">
            <div className='nav'>
                <img src={logo} alt="Logo Escola Germinare" className='logo'/>
                <button className="burguer-button" onClick={ToggleClass}>
                    <div className={`hamburguer-menu ${menuActualClass()} ret-top`}></div>
                    <div className={`hamburguer-menu ${menuActualClass()} ret-middle`}></div>
                    <div className={`hamburguer-menu  ${menuActualClass()} ret-bottom`}></div>
                </button>             
            </div>
            <ul className={`menu ${classActual()}`}>
                <li>
                    <p className="menu-item admission">Admissão 2021/2022</p>
                    <h1 class="hr"></h1>
                </li>
                <li>
                    <p className="menu-item">Doação</p>
                    <h1 class="hr"></h1>
                </li>
                <li className="menu-item">Contato</li>
                <li className='menu-item about-us-container'>
                    <div onClick={toggleAboutClass} className="title-submenu">
                        Sobre nós 
                        <FiChevronRight/>
                    </div>
                    <ul className={`submenu ${aboutClassActual()}`}>
                        <li className='submenu-item'><a href="#">Valores</a></li>
                        <li className='submenu-item'><a href="#">Estágios</a></li>
                        <li className='submenu-item'><a href="#">Certificados</a></li>
                        <li className='submenu-item'><a href="#">Governança</a></li>
                        <li className='submenu-item'><a href="#">Projeto Acadêmico</a></li>
                    </ul>  
                </li>
                <li onClick={toggleCollabClass} className='menu-item collaborator-container'>
                    <div className="title-submenu">
                        <><FaLock className='lock'/> Login </>
                        <FiChevronRight/>
                    </div>
                    <ul className={`submenu ${collabClassActual()}`}>
                        <li className='submenu-item'>Minha biblioteca</li>
                        <li className='submenu-item'>Agenda Edu</li>
                        <li className='submenu-item'>Árvore de livros</li>
                    </ul>    
                </li>
            </ul>
        </div>
    )
}
export default Nav