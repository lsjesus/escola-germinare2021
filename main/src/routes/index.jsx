import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import Home from '../pages/home/index'
import Admission from '../pages/admission/index'
import Internship from '../pages/internship/index'
import Values from '../pages/values/index'
import Certificates from '../pages/certificates/index'
<<<<<<< HEAD
import Governance from '../pages/governance'
=======
import academicProject from '../pages/academic-project'
>>>>>>> 562a46455650d02ef96347a44151e21d2125c498
const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/admission' component={Admission} />
                <Route path='/internship' component={Internship} />
                <Route path='/values' component={Values}/>
                <Route path='/certificates' component={Certificates}/>
<<<<<<< HEAD
                <Route path='/governance' component={Governance}/>
=======
                <Route path='/academic' component={academicProject}/>
>>>>>>> 562a46455650d02ef96347a44151e21d2125c498
            </Switch>
        </BrowserRouter>
    )
}
export default Routes