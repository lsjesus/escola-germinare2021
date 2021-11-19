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
import { Link } from 'react-router-dom'
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
            <Carousel className='carouselzin'>
                <CarouselItem interval={5000}>
                    <img src={Giroto} className='carrossel-img'></img>
                    <h1 className='carousel-txt giroto'>Há mais de uma década germinando líderes.</h1>
                    <a href='' onClick={(event)=>{
                        event.preventDefault()
                        const scroll = document.getElementById("scroll")
                        window.scrollTo(0, scroll.getBoundingClientRect().top)}}>
                        <FiChevronsDown className='chevrons'/>
                    </a>
            
                </CarouselItem>
                <CarouselItem  interval={5000}>
                    <picture>
                        <source media="(max-width: 605px)" srcset={Cleutonpq} />
                        <img src={Cleuton}  className='carrossel-img katia'></img>
                    </picture>
                    <h1 className='carousel-txt cleuton'>Totalmente <strong>gratuita</strong> e <strong>digital</strong>.</h1>
                    <a href='' onClick={(event)=>{
                        event.preventDefault()
                        const scroll = document.getElementById("scroll")
                        window.scrollTo(0, scroll.getBoundingClientRect().top)}}>
                        <FiChevronsDown className='chevrons'/>
                    </a>
                </CarouselItem >
                <CarouselItem interval={5000}>
                    <img src={Admissao}  className='carrossel-img admissao-img'></img>
                    <h1 className='carousel-txt admissao'>Processo de Admissão 2021/2022</h1>
                    <Link to='/admission' onClick={()=>{if (document.readyState === 'complete') {window.scroll(0, 0)}}}><button className='carousel-btn'>Inscreva-se</button></Link>
                    <a href='' onClick={(event)=>{
                        event.preventDefault()
                        const scroll = document.getElementById("scroll")
                        window.scrollTo(0, scroll.getBoundingClientRect().top)}}>
                        <FiChevronsDown className='chevrons'/>
                    </a>
                </CarouselItem >
                <CarouselItem  interval={5000}>
                    <img src={Universidade} className='carrossel-img'></img>
                    <h1 className='carousel-txt universidade'>Venha se graduar em nossa Faculdade.</h1>
                    <button className='carousel-btn'>Saiba Mais</button>
                    <a href='' onClick={(event)=>{
                        event.preventDefault()
                        const scroll = document.getElementById("scroll")
                        window.scrollTo(0, scroll.getBoundingClientRect().top)}}>
                        <FiChevronsDown className='chevrons'/>
                    </a>
                </CarouselItem>
            </Carousel>
            <div id="scroll"></div>
            <div className="caneta-azul" >
                <div className="play" onClick={openDisplay}>
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