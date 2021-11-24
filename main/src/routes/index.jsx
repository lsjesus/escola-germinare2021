import {HashRouter,  Route, Switch} from 'react-router-dom'
import React, { Suspense, lazy } from 'react';
import logo from './assets/logo-novo-branco-oficial.png'
import '../styles/global.css'
const Home = lazy(() => import('../pages/home/index'));
const Admission = lazy(() => import('../pages/admission/index'));
const Internship = lazy(() => import('../pages/internship/index'));
const Values = lazy(() => import('../pages/values/index'));
const Certificates = lazy(() => import('../pages/certificates/index'));
const Governance = lazy(() => import('../pages/governance'));
const academicProject = lazy(() => import('../pages/academic-project'));
const Donation = lazy(() => import('../pages/donation'));
const Contact = lazy(() => import('../pages/contact'));
const lgpd = lazy(() => import('../pages/lgpd'));
const Routes = ()=>{
    return(
        <HashRouter>
            <Suspense fallback={
                <div className="lazy">
                    <img src={logo} alt=""className="lazy-logo" />
                    <div class="loader"></div>
              
                  </div>
            }>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/admission' component={Admission} />
                <Route path='/internship' component={Internship} />
                <Route path='/values' component={Values}/>
                <Route path='/certificates' component={Certificates}/>
                <Route path='/governance' component={Governance}/>
                <Route path='/academic' component={academicProject}/>
                <Route path='/donation' component={Donation}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/lgpd' component={lgpd}/>
            </Switch>
            </Suspense>
        </HashRouter>
    )
}
export default Routes