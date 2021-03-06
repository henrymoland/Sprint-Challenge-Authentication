import React, { Component } from 'react';
import Navigation from './Navigation';
import '../App.css';
import Axios from 'axios';


class Signup extends Component {
    state = {
        username: "",
        password: ""
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const endpoint ='http://localhost:3300/api/register';
        const newUser = {
            username: this.state.username,
            password: this.state.password
        };

        Axios.post(endpoint, newUser)
        .then(res => {
            console.log("user registered", res.data)
            this.props.history.push('/signin')
        })
        .catch(err => {
            console.log("Error from api", err)
        });  
    };

  render() {
    return (
        <div className="header">
            <div className="primary-overlay">
                <Navigation/>
                <div className="container">
                    <div className="row signup-section">
                        <div className="col s12 m6">
                            <h4 className="white-text">Get a Free Account</h4>
                            <p className="white-text">It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout. 
                            </p>
                            <h4 className="white-text">Download Free Jokes</h4>
                            <p className="white-text">It is a long established fact that a reader will be distracted 
                            by the readable content of a page when looking at its layout. 
                            </p>
                            <h4 className="white-text">New Jokes Added Daily</h4>
                            <p className="white-text">It is a long established fact that a reader will be distracted
                             by the readable content of a page when looking at its layout. 
                            </p>
                        </div>
                        <div className="col s12 m6">
                            <div className="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
                                <form onSubmit={ this.handleSubmit }>
                                    <h5 className="center grey-text text-darken-4">Sign Up</h5>
                                    <p className="center grey-text text-darken-4">It's free and only takes a minute</p>
                                    <div className="input-field">
                                        <input type="text" id="username" value={ this.state.username } onChange={ this.handleOnChange }/>
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" id="password" value={ this.state.password } onChange={ this.handleOnChange } />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <input type="submit" value="signup" className="btn btn-large red btn-extend"/>
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

export default Signup;
