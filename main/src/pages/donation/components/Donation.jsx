import './style-donation.css'
import qrcode from '../assets/qrcode.png'
import logo_branco2 from '../assets/logo_branco2.png'
import {Header} from '../../../components/Title-2/Header'
import { Link } from 'react-router-dom'
const Donation = () => {
    return(
        <>
        <Header>
        <p>
            <Link to='/'>Home</Link>/ Doação
        </p>
        <h1>Doação</h1>
        </Header>   
        <section className='donation'>
            <p className='text'> O desafio da Escola Germinare é tornar-se uma referência no setor da educação, a partir da excelência na qualidade, proposta acadêmica diferenciada e de sua missão em formar jovens administradores de empresas e cidadãos. Neste sentido, a escola convida pessoas e empresas que acreditam no poder da educação para fazerem parte deste legado!</p>
            <h1 className='title-donation'>Como apoiar?</h1>
            <p className='text'>Para apoiar, você pode fazer uma doação para a Escola Germinare através do PicPay. <span>Para isso basta escanear o Qr Code abaixo e pagar tanto com seu saldo em carteira ou com seu cartao de credito!</span></p>
            <div className='container-pai'>
                <img className='imagem-donation'src={qrcode} alt="Qrcode para realizar a doação"/>
                <a href="https://picpay.me/doegerminare">Doar</a>
                <div className='container-donation-ation'>
                    <div className='container-logo-branco'>
                        <img src={logo_branco2} alt="" />
                    </div>
                    <div className='dica'>
                        <p>Caso queira doar mensalmente, procure por @doegerminare no PicPay e faça sua contribuição mensal, a partir de R$10,00/mês.</p>
                    </div>
                </div>
            </div>
            <p className='text'> Caso seja Pessoa Jurídica ou queira fazer uma doação diretamente em nossa conta corrente, pedimos que por gentileza entre em contato conosco via <a href="mailto: instituto@germinare.org.br" className='link-donation'>instituto@germinare.org.br</a>.</p>
        </section> 
        </>   
    )
}
export default Donation