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
                <li>
                    <p className="menu-item">Contato</p>
                    <h1 class="hr"></h1>
                </li>
                <li className='about-us-container'>
                    <div onClick={toggleAboutClass} className="title-submenu">
                        <p className="menu-item">Sobre nós <FiChevronRight/></p>
                        <h1 class="hr"></h1>
                    </div>
                    <ul className={`submenu ${aboutClassActual()}`}>
                        <li>
                            <a className='menu-item' href="#">Valores</a>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <a className='menu-item' href="#">Estágios</a>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <a className='menu-item' href="#">Certificados</a>
                            <h1 class="hr"></h1></li>
                        <li>
                            <a className='menu-item' href="#">Governança</a>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <a className='menu-item' href="#">Projeto Acadêmico</a>
                            <h1 class="hr"></h1>
                        </li>
                    </ul>  
                </li>
                <li  className='collaborator-container'>
                    <div onClick={toggleCollabClass} className="title-submenu">
                        <p className="menu-item">Login <FiChevronRight/></p>
                        <h1 class="hr"></h1>
                    </div>
                    <ul className={`submenu ${collabClassActual()}`}>
                        <li>
                            <a className='menu-item' href="#">Minha biblioteca</a>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <a className='menu-item' href="#">Agenda Edu</a>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <a className='menu-item' href="#">Árvore de livros</a>
                            <h1 class="hr"></h1>
                        </li>
                    </ul>    
                </li>
            </ul>
        </div>
    )
}
export default Nav