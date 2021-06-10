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
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return(
            <>
                <br />
                <h1>Create an Account</h1>
                <br />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                        type="name"
                        name="name"
                        placeholder="Enter your name"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <input 
                        type="text"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        value={this.state.phone}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <input 
                        type="text"
                        name="username"
                        placeholder="Create Username"
                        value={this.state.username}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Create Password"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <button type="submit">Create Account</button>
                </form>
            </>
        )
    }
}


export default Register