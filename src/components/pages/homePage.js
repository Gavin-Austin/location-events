import React, { Component } from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {zip: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({zip: event.target.value});
    }

    handleSubmit(event) {
        alert('A zip code was submitted: ' + this.state.zip);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid">
                <div>
                <h1> Welcome to Location Events </h1>
                <h2> Enter Your Zip Code Below: </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" zip={this.state.zip} onChange={this.handleChange} />
                    </label>
                    <input type="submit" zip="Submit" />
                </form>
            </div>
            </div>
        );
    }
}

export default Homepage;