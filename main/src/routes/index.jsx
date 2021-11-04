import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import Home from '../pages/home/index'
import Admission from '../pages/admission/index'
const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/admission' component={Admission} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes