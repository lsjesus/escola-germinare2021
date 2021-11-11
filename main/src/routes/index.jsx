import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import Home from '../pages/home/index'
import Admission from '../pages/admission/index'
import Internship from '../pages/internship/index'
import Values from '../pages/values/index'
import Certificates from '../pages/certificates/index'
import Governance from '../pages/governance'
import academicProject from '../pages/academic-project'
const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/admission' component={Admission} />
                <Route path='/internship' component={Internship} />
                <Route path='/values' component={Values}/>
                <Route path='/certificates' component={Certificates}/>
                <Route path='/governance' component={Governance}/>
                <Route path='/academic' component={academicProject}/>

            </Switch>
        </BrowserRouter>
    )
}
export default Routes