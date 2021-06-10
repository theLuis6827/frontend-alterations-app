import React from 'react'
import {Link} from 'react-router-dom'


class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                user: this.state
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.user){
                localStorage.setItem("token", data.jwt)
                this.props.updateUserState({
                    name: data.user.name,
                    email: data.user.email,
                    phone: data.user.phone,
                    username: data.user.username
                })
                this.props.history.push("/account")
            }
        })
    }

    handleLogout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }

    handleChange = (e) => {
        const { name, value } = e.target
        console.log("handle change", e.target.name)
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <>
                <br />
                <h1> Login </h1>
                <br />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={this.state.username}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Enter Password"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <button type="submit">Log In</button>
                    <br />
                    <br />
                </form>
                <Link to="/register" className="link" >Create an Account</Link>
            </>
        )
    }
}


export default Login