import './style.css'
import logo from '../../assets/logo-germinare.png'
import {FiChevronRight} from 'react-icons/fi'
import { useState } from 'react'
import {FaLock} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Nav = ()=>{
    const [isActive, setActive] = useState("true");
    const [isMenuActive, setMenuActive] = useState("true");
    const [isAboutActive, setAboutActive] = useState("true");
    const [isChevAboutActive, setChevAboutActive] = useState("true");
    const [isCollabActive, setCollabActive] = useState("true");
    const [isChevCollabActive, setChevCollabActive] = useState("true");
    
    const ToggleClass = () => {
        if (!isAboutActive) {toggleAboutClass()};
        if (!isCollabActive) {toggleCollabClass()};
        setActive(!isActive);
        setMenuActive(!isMenuActive);}
    const classActual = ()=>{return !isActive ? "aberto" : "null"};
    const menuActualClass = () => {return !isMenuActive ? "menu-aberto" : "null"}

    const toggleAboutClass = () => {
        setChevAboutActive(!isChevAboutActive);
        setAboutActive(!isAboutActive);};
    const aboutClassActual = ()=>{return !isAboutActive ? "aberto" : "null"};
    const chevAboutClassActual = ()=>{return !isChevAboutActive ? "turned" : "null"};

    const toggleCollabClass = () => {
        setChevCollabActive(!isChevCollabActive);
        setCollabActive(!isCollabActive);};
    const collabClassActual = ()=>{return !isCollabActive ? "aberto" : "null"};
    const chevCollabClassActual = ()=>{return !isChevCollabActive ? "turned" : "null"};

    return(
        <div className="nav-wrapper nav-home">
            <div className='nav'>
                <Link to='/' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className="logo-wrapper"><img src={logo} alt="Logo Escola Germinare" className="logo"/></Link>
                <button className="burguer-button" onClick={ToggleClass}>
                    <div className={`hamburguer-menu ${menuActualClass()} ret-top`}></div>
                    <div className={`hamburguer-menu ${menuActualClass()} ret-middle`}></div>
                    <div className={`hamburguer-menu  ${menuActualClass()} ret-bottom`}></div>
                </button>             
            </div>
            <ul className={`menu ${classActual()}`}>
                <li>
                    <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} to='/admission' className="menu-item admission">Admissão 2021/2022</Link>
                    <h1 class="hr"></h1>
                </li>
                <li>
                    <Link to='/donation' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className="menu-item">Doação</Link>
                    <h1 class="hr"></h1>
                </li>
                <li>
                    <Link to='/contact' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className="menu-item">Contato</Link>
                    <h1 class="hr"></h1>
                </li>
                <li className='about-us-container'>
                    <div onClick={toggleAboutClass} className="title-submenu">
                        <p className="menu-item">Sobre nós <FiChevronRight size={20} className={`chevron-right ${chevAboutClassActual()}`}/></p>
                    </div>
                    <ul className={`submenu ${aboutClassActual()}`}>
                        <li>
                            <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='menu-item' to='/values'>Valores</Link>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='menu-item' to='/internship'>Estágios</Link>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <Link to='/certificates' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='menu-item'>Certificados</Link>
                            <h1 class="hr"></h1></li>
                        <li>
                            <Link to='/governance' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} className='menu-item'>Governança</Link>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <Link onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}} to='/academic' className='menu-item'>Projeto Acadêmico</Link>
                            <h1 class="hr"></h1>
                        </li>
                    </ul>  
                </li>
                <li  className='collaborator-container'>
                    <div onClick={toggleCollabClass} className="title-submenu">
                        <p className="menu-item"><FaLock size={12} className="lock-icon"/> Acesso <FiChevronRight size={20} className={`chevron-right ${chevCollabClassActual()}`}/></p>
                    </div>
                    <ul className={`submenu ${collabClassActual()}`}>
                        <li>
                            <a className='menu-item' href="https://dliportal.zbra.com.br/Login.aspx?key=Germinare">Minha biblioteca</a>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <a className='menu-item' href="https://agendaedu.com/login/">Agenda Edu</a>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <a className='menu-item' href="https://www.arvore.com.br/">Árvore de livros</a>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <a className='menu-item' href="https://hcm19.sapsf.com/login?company=institutog#/login">AVV</a>
                            <h1 class="hr"></h1>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
export default Nav