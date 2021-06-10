import Routes from './Routes'
import './App.css';
import React from 'react';
import Header from './components/Header'

class App extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    username: "",
    alterations: [],
    userItems: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/alterations')
    .then(res => res.json())
    .then(data => {
      this.setState({
        alterations: data
      })
    })

    if(localStorage.token){
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.updateUserState(data.user)
      })
    }
  }

  updateUserState = (user) => {
    this.setState({
      name: user.name,
      email: user.email,
      phone: user.phone,
      username: user.username
    })
  }

  updateUserItems = (newItems) => {
    this.setState({
      userItems: newItems
    })
  }

  render() {
      return (
        <div className="App">
          <Header 
            updateUserState={this.updateUserState} 
            username={this.state.username}
          />
          <Routes
            state={this.state}
            updateUserState={this.updateUserState} 
            updateUserItems={this.updateUserItems} 
            user={this.state} 
            userItems={this.state.userItems} 
          />
        </div>
      )
  }
}

export default App
