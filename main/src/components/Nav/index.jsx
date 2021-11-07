import './style.css'
import logo from '../assets/logo-germinare.png'
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
        <div className="nav-wrapper nav-adm">
            <div className='nav'>
                <Link to='/' className="logo-wrapper"><img src={logo} alt="Logo Escola Germinare" className="logo"/></Link>
                <button className="burguer-button" onClick={ToggleClass}>
                    <div className={`hamburguer-menu ${menuActualClass()} ret-top`}></div>
                    <div className={`hamburguer-menu ${menuActualClass()} ret-middle`}></div>
                    <div className={`hamburguer-menu  ${menuActualClass()} ret-bottom`}></div>
                </button>             
            </div>
            <ul className={`menu ${classActual()}`}>
                <li>
                    <Link className="menu-item admission" to='/admission' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Admissão 2021/2022</Link>
                    <h1 class="hr"></h1>
                </li>
                <li>
                    <Link className="menu-item" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Doação</Link>
                    <h1 class="hr"></h1>
                </li>
                <li>
                    <Link className="menu-item" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Contato</Link>
                    <h1 class="hr"></h1>
                </li>
                <li className='about-us-container'>
                    <div onClick={toggleAboutClass} className="title-submenu">
                        <p className="menu-item">Sobre nós <FiChevronRight size={20} className={`chevron-right ${chevAboutClassActual()}`}/></p>
                    </div>
                    <ul className={`submenu ${aboutClassActual()}`}>
                        <li>
                            <Link className='menu-item' to='/values' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Valores</Link>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <Link className='menu-item' to='/internship' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Estágios</Link>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <Link className='menu-item' href="#" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Certificados</Link>
                            <h1 class="hr"></h1></li>
                        <li>
                            <Link className='menu-item' href="#" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Governança</Link>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <Link className='menu-item' href="#" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Projeto Acadêmico</Link>
                            <h1 class="hr"></h1>
                        </li>
                    </ul>  
                </li>
                <li  className='collaborator-container'>
                    <div onClick={toggleCollabClass} className="title-submenu">
                        <p className="menu-item"><FaLock size={12} className="lock-icon"/> Login <FiChevronRight size={20} className={`chevron-right ${chevCollabClassActual()}`}/></p>
                    </div>
                    <ul className={`submenu ${collabClassActual()}`}>
                        <li>
                            <Link className='menu-item' href="#" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Minha biblioteca</Link>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <Link className='menu-item' href="#" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Agenda Edu</Link>
                            <h1 class="hr"></h1>
                        </li>
                        <li>
                            <Link className='menu-item' href="#" onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}>Árvore de livros</Link>
                            <h1 class="hr"></h1>
                        </li>
                    </ul>    
                </li>
            </ul>
        </div>
    )
}
export default Nav