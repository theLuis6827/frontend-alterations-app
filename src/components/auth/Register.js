import React from 'react'

class Register extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        username: "",
        password: ""
    }
    
    handleSubmit = (e) => {
        // console.log("Form Submit", history)
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/users', {
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
        console.log("handle change", e)
        this.setState({
            [name]: value
        })
    }
    
    render() {
        console.log(this.props)
        return(
            <>
            <h1> this be Register Page</h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input 
                    type="name"
                    name="name"
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                />
                <input 
                    type="text"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    value={this.state.phone}
                    onChange={(e) => this.handleChange(e)}
                />
                <input 
                    type="text"
                    name="username"
                    placeholder="Create Username"
                    value={this.state.username}
                    onChange={(e) => this.handleChange(e)}
                    />
                <input 
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Create Password"
                    onChange={(e) => this.handleChange(e)}
                />
                <button type="submit">Log In</button>
            </form>
            <h1>Name: {this.state.name}</h1>
            <h1>Email: {this.state.email}</h1>
            <h1>Username: {this.state.username}</h1>
            <h1>Password: {this.state.password}</h1>
            </>
        )
    }
}


export default Register