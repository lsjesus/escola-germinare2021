import {BrowserRouter,  Route} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../pages/home/index'
import Admission from '../pages/admission/index'
const Rotas = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' component={Admission} exact />
                {/* <Route path='/admission' component={Admission} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas