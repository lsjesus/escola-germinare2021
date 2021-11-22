import './style.css'
import friboi from '../../assets/logo-friboi.png'
import picpay from '../../assets/logo-picpay.png'
import swift from '../../assets/logo-swift.png'
import original from '../../assets/logo-original.png'
import seara from '../../assets/logo-seara.png'
import flora from '../../assets/logo-flora.png'
import AOS from 'aos'
import '../../../../styles/format-aos.css'
const Academias = ()=>{
    window.addEventListener('load', function() {AOS.init()})
    window.onscroll = function() {
        const footer = document.querySelector('.footer')
        if (footer!=null){
            const topfooter = footer.getBoundingClientRect().top
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 324){
             const nav = document.querySelector('.nav-wrapper')
             nav.style.opacity = 0
             nav.style.transition = 'opacity .92s ease-in-out, 1s z-index .92s ease-in-out'
             nav.style.zIndex = -100
            } else{
                const nav = document.querySelector('.nav-wrapper')
                nav.style.zIndex = 101
                nav.style.opacity = 1
                nav.style.transition = 'opacity .92s ease-in-out'
            }
        }

       }
    return(
        <section data-aos="fade-up" className="academias aos-init aos-animate" data-aos-duration="400"
        data-aos-easing="ease-in-out">
            <h1 className="hr-cultura" data-aos='fade-right' data-aos-duration='1700' data-aos-ease='ease-in-out'></h1>
            <h1 className='academias-title'>Academias de Ensino</h1>

            <p className="academias-subtitle">Conheça nossas áreas de educação.</p>
            
            <div className="academia-container">
                <div className="academia-card friboi">
                    <div className="format-academia">
                        <img src={friboi} alt="" className="logo-academia" />
                        <p className="txt-card-academia">Aprenda diversas metodologias para a solução de problemas através de operações de Commodities.</p>
                    </div>
                </div>
                <div className="academia-card picpay">
                    <div className="format-academia">
                        <img src={picpay} alt="" className="logo-academia" />
                        <p className="txt-card-academia">Aprenda sobre a gestão tecnológica e digital através da experiência do usuário e software.</p>
                    </div>
                </div>
                <div className="academia-card swift">
                    <div className="format-academia">
                        <img src={swift} alt="" className="logo-academia" />
                        <p className="txt-card-academia">Aprenda serviços varejistas e gestão de negócios através do conhecimento de produto, pessoas, expansão, sustentabilidade e transformação digital.</p>
                    </div>
                </div>
                <div className="academia-card original">
                    <div className="format-academia">
                        <img src={original} alt="" className="logo-academia" />
                        <p className="txt-card-academia">Aprenda sobre Finanças Pessoais e Investimentos através de conceitos econômicos e produtos/serviços bancários.</p>
                    </div>
                </div>
                <div className="academia-card seara-flora">
                    <div className="format-academia">
                        <div className="container-logos">
                            <img src={seara} alt="" className="logo-academia" />
                            <img src={flora} alt="" className="logo-academia" />
                        </div>
                        <p className="txt-card-academia">Aprenda sobre a estrutura organizacional e conheça mais sobre marcas, áreas comerciais, marketing, produto e Supply Chain.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Academias