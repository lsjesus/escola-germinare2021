import logo from '../../assets/logo-germinare.png'
import './style.css'
import {FiChevronsDown} from 'react-icons/fi'
import{FaLock} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {Carousel, CarouselItem} from 'react-bootstrap'
import Giroto from '../../assets/giroto.png'
import Cleuton from '../../assets/cleuton.png'
import Admissao from '../../assets/admissao.png'
import Universidade from '../../assets/universidade.png'
import Play from '../../assets/play.png'
import Cleutonpq from '../../assets/cleuton-pq.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const CarouselHome = ()=>{
    function openDisplay(){
        const display = document.querySelector('.video')
        const video = document.querySelector('.video-container')
        video.innerHTML = `<iframe class='videoyt' width="560" height="315" src="https://www.youtube.com/embed/EC5Ye0Y6TLA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        display.style.display = 'flex'
    }
    function closeDisplay(){
        const display = document.querySelector('.video')
        const video = document.querySelector('.video-container')
        video.innerHTML = `<iframe class='videoyt'></iframe>`
        display.style.display = 'none'
    }
    return(
        <>
            {/* <header className='header'>
                <img src={logo} alt="Logo Escola Germinare" className='logo'/>
                <nav className='navigation'>
                    <ul className='menu'>
                        <a href="">
                            <li className='item-menu' className='admissao' >Admissão 2021/2022</li>
                        </a>
                        <a href="">
                            <li className='item-menu'>Doação</li>
                        </a>
                        <a href="">
                            <li className='item-menu'>Contato</li>
                        </a>
                        <li className='item-menu about-us-li'>
                            Sobre nós
                            <ul className='about-us'>
                                <a href="">
                                    <li className='item-menu'>Valores</li>
                                </a>
                                <a href="">
                                    <li className='item-menu'>Estágios</li>
                                </a>
                                <a href="">
                                    <li className='item-menu'>Certificados</li>
                                </a>
                                <a href="">
                                    <li className='item-menu'>Governança</li>
                                </a>
                                <a href="">
                                    <li className='item-menu'>Projeto Acadêmico</li>
                                </a>
                            </ul>
                        </li>
                        <li className='item-menu collaborator-li'>
                            <FaLock className='lock'/> Login
                            <ul className='collaborator'>
                                <a href="">
                                    <li className='item-menu'>Minha biblioteca</li>
                                </a>
                                <a href="">
                                    <li className='item-menu'>Agenda Edu</li>
                                </a>
                                <a href="">
                                    <li className='item-menu'>Árvore de livros</li>
                                </a>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </header> */}
            <Carousel className='carouselzin'>
                <CarouselItem interval={8000}>
                    <img src={Giroto} className='carrossel-img'></img>
                    <h1 className='carousel-txt giroto'>Há mais de uma década germinando líderes.</h1>
                    <a href='#scroll'>
                        <FiChevronsDown className='chevrons'/>
                    </a>
                </CarouselItem>
                <CarouselItem  interval={8000}>
                    <picture>
                        <source media="(max-width: 605px)" srcset={Cleutonpq} />
                        <img src={Cleuton}  className='carrossel-img katia'></img>
                    </picture>
                    <h1 className='carousel-txt cleuton'>Totalmente <strong>gratuita</strong> e <strong>digital</strong>.</h1>
                    <a href='#scroll'>
                        <FiChevronsDown className='chevrons'/>
                    </a>
                </CarouselItem >
                <CarouselItem interval={8000}>
                    <img src={Admissao}  className='carrossel-img admissao-img'></img>
                    <h1 className='carousel-txt admissao'>Processo de Admissão 2021/2022</h1>
                    <button className='carousel-btn'>Inscreva-se</button>
                    <a href='#scroll'>
                        <FiChevronsDown className='chevrons'/>
                    </a>
                </CarouselItem >
                <CarouselItem  interval={8000}>
                    <img src={Universidade} className='carrossel-img'></img>
                    <h1 className='carousel-txt universidade'>Venha se graduar em nossa Faculdade.</h1>
                    <button className='carousel-btn'>Saiba Mais</button>
                    <a href='#scroll'>
                        <FiChevronsDown className='chevrons'/>
                    </a>
                </CarouselItem>
            </Carousel>
            <div className="caneta-azul" >
                <div className="play" onClick={openDisplay} id='scroll'>
                    <img src={Play} alt="" className='play-btn' />
                    <h1 className="play-title">HÁ 12 ANOS MUDANDO VIDAS</h1>
                    <p className='play-subtitle'>Assista o video e conheça mais a Germinare </p>
                </div>
            </div>
            <div className="video">
                <AiOutlineCloseCircle className='close-icon'  size={45} onClick={closeDisplay}/>
                <div className="video-container"></div>
                
            </div>
        </>
    )
}
export default CarouselHome