import React from 'react'
import {NavLink} from 'react-router-dom'


function Header(props) {

    const handleLogout = () => {
        localStorage.clear()
        props.updateUserState({
            name: "",
            email: "",
            phone: "",
            username: ""
        })
    }

    return(
        <div className="header">
            <img src="./bee-logo.png" alt="bee" height= "75" align= "right"></img>
            <h1 className="header-text">BusyBee Alterations</h1>
            <nav className="navbar">
                {props.username.length > 0 ? <NavLink to="/login" className="nav-link" ><p type="submit" onClick={() => handleLogout()} >Log Out</p> </NavLink> : <NavLink to="/login" className="nav-link" >Login</NavLink>}
                <NavLink to="/" exact className="nav-link">Home</NavLink>
                <NavLink to="/services" className="nav-link" >Services</NavLink>
                {props.username.length > 0 && <NavLink to="/contact" className="nav-link" >Contact</NavLink>}
                {props.username.length > 0 && <NavLink to="/account" className="nav-link" >My Account</NavLink>}
            </nav>     
        </div>     
    )
}

export default Header