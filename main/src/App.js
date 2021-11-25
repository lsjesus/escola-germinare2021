import Routes from './routes/index';
import './styles/global.css'
function App() {
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
  return (
    <div className="App" style={{fontFamily: "Montserrat, sans-serif"}}>
      <Routes/>
    </div>
  );
}

export default App;
