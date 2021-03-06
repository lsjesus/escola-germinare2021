import './style.css'
import friboi from '../../assets/logo-friboi.png'
import picpay from '../../assets/logo-picpay.png'
import swift from '../../assets/logo-swift.png'
import original from '../../assets/logo-original.png'
import seara from '../../assets/logo-seara.png'
import flora from '../../assets/logo-flora.png'
import AOS from 'aos'
import '../../../../styles/format-aos.css'
import { useEffect } from 'react'
import Aos from 'aos'
const Academias = ()=>{
    useEffect(()=>{
        setTimeout(()=>{
            Aos.init()
        }, 1000)
    }, [])
    return(
        <section data-aos="fade-up" className="academias aos-init aos-animate" data-aos-duration="400"
        data-aos-easing="ease-in-out">
            <h1 className="hr-cultura" data-aos='fade-right' data-aos-duration='1700' data-aos-ease='ease-in-out'></h1>
            <h1 className='academias-title'>Academias de Ensino</h1>

            {/* <p className="academias-subtitle">Conheça nossas áreas de educação.</p> */}
            
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
                        <p className="txt-card-academia">Aprenda sobre serviços varejistas e gestão de negócios através do conhecimento de pessoas e processos.</p>
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