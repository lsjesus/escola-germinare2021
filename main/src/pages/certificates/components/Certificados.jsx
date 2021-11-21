import './style.css'
import {Header} from '../../../components/Title-2/Header'
import unesco from '../assets/unesco.png'
import cmdca from '../assets/cmdca.png'
import cebas from '../assets/cebas.png'
import { Link } from 'react-router-dom'
const Certificados = ()=>{
    return(
        <>
        <Header>
            <p>
                <Link to='/'>Home</Link>/ Certificados
            </p>
            <h1>Certificados</h1>
        </Header>     
        <section className="certificados">
            <div className="certificado unesco">
                <img src={unesco} alt="unesco" className="certificado-img" />
                <div className="certificado-txt">
                    <h1 className="certificado-title">UNESCO - Organização das Nações Unidas para a Educação, Ciência e Cultura
</h1>
                    <p className="certificado-description">Em seu primeiro ano de funcionamento, a Germinare recebeu um grande sinal de reconhecimento de seu projeto educativo, pois passou a integrar o Programa das Escolas Associadas da UNESCO no Brasil (PEA- Unesco). O certificado, emitido pela direção do programa, em Paris, foi entregue para a Escola Germinare no dia 21 de outubro de 2010, durante o 16º Encontro Nacional do PEA, realizado em Manaus.
O programa é uma das principais iniciativas da UNESCO no campo da Educação. O PEA reúne escolas que priorizam em seu projeto pedagógico temas ligados à sustentabilidade, à cultura de paz, à ética, ao respeito à diversidade, à multiculturalidade, entre outros.</p>
                </div>
            </div>
            <div className="certificado cmda">
                <div className="certificado-txt">
                    <h1 className="certificado-title">CMDCA - Conselho Municipal dos Direitos da Criança e do Adolescente</h1>
                    <p className="certificado-description">A Escola Germinare faz parte do CMDCA desde 2014, um órgão responsável pela promoção e defesa dos direitos da infância e da adolescência.
</p>
                </div>
                <img src={cmdca} alt="cmdca" className="certificado-img" />
            </div>
            <div className="certificado upf">
                
                <div className="certificado-txt">
                    <h1 className="certificado-title">UPF - Utilidade Pública Federal</h1>
                    <p className="certificado-description">No dia 14/09/2015, o Ministério da Justiça publicou no Diário Oficial a certificação da Escola Germinare como Órgão de Utilidade Pública Federal - UPF. De acordo com esta certificação, as entidades de Utilidade Pública podem oferecer aos doadores - pessoas jurídicas tributadas com base no LUCRO REAL (excluídas, portanto as tributadas com base no lucro presumido, no lucro arbitrado e no SIMPLES) - o benefício da redução de seu Imposto de Renda e da Contribuição Social sobre o Lucro Líquido - CSLL. Isto quer dizer que as doações feitas em prol da Escola Germinare poderão ser consideradas pelas empresas apoiadoras como despesa operacional e consequente redução da base de cálculo do imposto de renda e da CSLL e, finalmente, redução do próprio IRPJ e da contribuição social em questão em até de 2% (dois por cento) do lucro operacional da pessoa jurídica, antes de computada a sua dedução, e devem ser realizados mediante crédito em conta corrente bancária, diretamente em nome da entidade beneficiária.</p>
                </div>
            </div>
            <div className="certificado cebas">
                <img src={cebas} alt="cebas" className="certificado-img" />
                <div className="certificado-txt">
                    <h1 className="certificado-title"> CEBAS - Certificado de Entidades Beneficentes de assistência Social
</h1>
                    <p className="certificado-description">Em 2018, a Germinare passou a ter a Certificação de Entidades Beneficentes da Assistência Social, CEBAS. Este certificado significa que a escola contribui de maneira efetiva para o processo de inclusão social no país por meio de ofertas de bolsas de estudo, integrais ou parciais, constituindo-se em uma política pública de acesso à Educação Básica e Superior.
</p>
                </div>
            </div>
        </section>
        </>
    )
}
export default Certificados