// import logo from './logo.svg';
// import Home from './home/Home'
// import Login from './components/auth/Login'
// import Contact from './components/Contact'
// import Services from './components/Services'
import Routes from './Routes'
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    username: ""
  }

  componentDidMount() {
    if(localStorage.token){
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(res => {
        this.updateUserState(res.user)
      })
    }
  }

  updateUserState = (user) => {
    console.log(user)
    this.setState({
      name: user.name,
      email: user.email,
      phone: user.phone,
      username: user.username
    })
  }

  render() {
      return (
        <div className="App">
          <Routes state={this.state} updateUserState={this.updateUserState} />
        </div>
      )
  }
}

export default App
