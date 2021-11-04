import './styles/global.css'
import Footer from "./components/Footer/index"
import Main from "./components/Admission/index"
import Nav from './components/Nav/index'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
