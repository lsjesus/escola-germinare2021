import Carousel from "./components/CarouselHome/CarouselHome";
import Footer from './components/Footer/Footer'
import Nav from  './components/Nav/index'
import Cultura from "./components/Cultura";
import Academias from "./components/Academias/index";
import AboutOurSchool from "./components/AboutOurSchool/AboutOurSchool";
import ComeMakeHistory from "./components/ComeMakeHistory/ComeMakeHistory";
const Home = ()=>{
  return(
    <div className='Home'>
      <Nav/>
      <Carousel/>
      <AboutOurSchool/>
      <Cultura/>
      <Academias/>
      <ComeMakeHistory/>
      <Footer/>
    </div>

  )
   


}
export default Home