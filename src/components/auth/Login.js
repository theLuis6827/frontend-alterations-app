import React from 'react'

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
        console.log("Form Submit")
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
            console.log(data)
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
            <h1> this be Login </h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input 
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={this.state.username}
                    onChange={(e) => this.handleChange(e)}
                    />
                <input 
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Enter Password"
                    onChange={(e) => this.handleChange(e)}
                />
                <button type="submit">Log In</button>
            </form>
            <h1>Username: {this.state.username}</h1>
            <h1>Password: {this.state.password}</h1>
            </>
        )
    }
}


export default Login