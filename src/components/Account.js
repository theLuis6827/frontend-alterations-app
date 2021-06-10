import React from 'react'

class Account extends React.Component {

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/items', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            },
        })
        .then(res => res.json())
        .then(res => this.props.updateUserItems(res))
    }

    render() {
        console.log(this.props)
        return(
            <>
                <br />
                <h1> Welcome {this.props.user.name}! </h1>
                <h2>Previous Transactions:</h2>
                {this.props.userItems.map(item => <h3>{item.name} {item.alterations[0].price}</h3>)}
            </>
        )
    }

}

export default Account