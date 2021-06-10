import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Account from './components/Account'
import Services from './components/Services'
import Contact from './components/Contact'

const Routes = (props) => {
    return(
        <Switch>
            <Route path= '/' exact render={routerProps=> <Home {...routerProps} />} />
            <Route path= '/login' exact render={routerProps=> <Login {...routerProps} updateUserState={props.updateUserState} />} />
            <Route path= '/register' exact render={routerProps=> <Register {...routerProps} updateUserState={props.updateUserState} />} />
            <Route path= '/account' exact render={routerProps=> <Account {...routerProps} user={props.user} userItems={props.userItems} updateUserItems={props.updateUserItems} />} />
            <Route path= '/services' exact render={routerProps=> <Services {...routerProps} alterations={props.state.alterations} />} />
            <Route path= '/contact' exact render={routerProps=> <Contact {...routerProps} alterations={props.state.alterations} />} />
        </Switch>
    ) 
}

export default Routes