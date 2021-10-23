import logo from '../assets/logo-germinare.png'
import './style.css'
import {FiChevronsDown} from 'react-icons/fi'
import{FaLock} from 'react-icons/fa'
import {Carousel, CarouselItem} from 'react-bootstrap'
import Giroto from '../assets/giroto.png'
import Cleuton from '../assets/cleuton.png'
import Admissao from '../assets/admissao.png'
import Universidade from '../assets/universidade.png'
const Header = ()=>{
    return(
        <>
            <header className='header'>
                <img src={logo} alt="Logo Escola Germinare" className='logo'/>
                <nav className='navigation'>
                    <ul className='menu'>
                        <li className='item-menu' className='admissao' >Admissão 2021/2022</li>
                        <li className='item-menu'>Doação</li>
                        <li className='item-menu'>Contato</li>
                        <li className='item-menu'>
                            Sobre nós
                            <ul className='about-us'>
                                <li className='item-menu'>Valores</li>
                                <li className='item-menu'>Estágios</li>
                                <li className='item-menu'>Certificados</li>
                                <li className='item-menu'>Governança</li>
                                <li className='item-menu'>Projeto Acadêmico</li>
                            </ul>
                        </li>
                        <li className='item-menu'>
                            <FaLock className='lock'/> Login
                            <ul className='collaborator'>
                                <li className='item-menu'>Minha biblioteca</li>
                                <li className='item-menu'>Agenda Edu</li>
                                <li className='item-menu'>Árvore de livros</li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </header>
            <Carousel className='carouselzin'>
                <CarouselItem interval={8000}>
                    <img src={Giroto} className='carrossel-img'></img>
                    <FiChevronsDown className='chevrons'/>
                </CarouselItem>
                <CarouselItem  interval={8000}>
                    <img src={Cleuton}  className='carrossel-img'></img>
                    <FiChevronsDown className='chevrons'/>
                </CarouselItem >
                <CarouselItem interval={8000}>
                    <img src={Admissao}  className='carrossel-img'></img>
                    <FiChevronsDown className='chevrons'/>
                </CarouselItem >
                <CarouselItem  interval={8000}>
                    <img src={Universidade} className='carrossel-img'></img>
                    <FiChevronsDown className='chevrons'/>
                </CarouselItem>
            </Carousel>
            <div className="caneta-azul"></div>
        </>
    )
}
export default Header