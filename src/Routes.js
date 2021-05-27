import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Account from './components/Account'
import Services from './components/Services'
import Contact from './components/Contact'

const Routes = (props) => {
    console.log(props)
    return(
        <Router>
            <Switch>
                <Route path= '/' exact component={routerProps=> <Home {...routerProps} />} />
                <Route path= '/login' exact component={routerProps=> <Login {...routerProps} updateUserState={props.updateUserState} />} />
                <Route path= '/register' exact component={routerProps=> <Register {...routerProps} updateUserState={props.updateUserState} />} />
                <Route path= '/account' exact component={routerProps=> <Account {...routerProps} />} />
                <Route path= '/services' exact component={routerProps=> <Services {...routerProps} />} />
                <Route path= '/contact' exact component={routerProps=> <Contact {...routerProps} />} />
            </Switch>
        </Router>
    ) 
}

export default Routes