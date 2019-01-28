import React, { Component } from 'react';
import Navigation from './Navigation';
import '../App.css';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
    state = {
        username: "",
        password: ""
    }

    handleOnChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const credentials = this.state;
        const endpoint ='http://localhost:3300/api/login';

        Axios.post(endpoint, credentials)
        .then(res => {
            localStorage.setItem('jwt', res.data.token);
            console.log("response from api", res.data)
        })
        .catch(err => {
            console.log("Error from api", err)
        });
        this.setState({
            username: "",
            password: "",
        })
    };

  render() {
    return (
        <div className="header">
            <div className="primary-overlay">
                <Navigation/>
                <div className="container">
                    <div className="row signup-section">
                        <div className="col s12">
                            <div className="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">

                                <form onSubmit={ this.handleSubmit }>
                                    <h5 className="center grey-text text-darken-4">Sign In</h5>
                                    <p className="center grey-text text-darken-4">Sign in to your Dad Jokes account and access our complete list of jokes.</p>
                                    <div className="learn=more center">
                                        <a href="#">Learn More</a>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="username" value={ this.state.username } onChange={ this.handleOnChange }/>
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" id="password" value= { this.state.password } onChange={ this.handleOnChange }/>
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <button className=" btn btn-large red" onClick={this.handleSubmit}>Sign In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Signin;