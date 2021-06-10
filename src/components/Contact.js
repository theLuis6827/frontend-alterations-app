import React from 'react'
import Select from 'react-select'

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        item: "",
        alteration: []
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSelectChange = (multiChange) => {
        this.setState({
            alteration: multiChange
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                item: this.state
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


    render() {

        const values = this.props.alterations.map(alteration => ({ value: alteration.id, label: alteration.name }))

        return(
            <>
                <br />
                <h1> Request A Quote! </h1>
                <br />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="Enter Email"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <input 
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        placeholder="Enter Phone Number"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <input 
                        type="text"
                        name="item"
                        value={this.state.item}
                        placeholder="Enter your Item"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br />
                    <br />

                    <Select
                        className="select"
                        isMulti
                        options={values}
                        onChange={(e) => this.handleSelectChange(e)}
                    />
                    <br />
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}


export default Contact