import React, { Component } from 'react';
import Navigation from './Navigation';
import '../App.css';
import Axios from 'axios';

class Signin extends Component {
    state = {
        jokes: [],
        
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const endpoint = 'http://localhost:3300/api/jokes';
        const options = {
            headers: {
                Authorization: token
            }
        };
        if (token) {
            Axios.get(endpoint, options)
            .then(res => {
                this.setState({ jokes: res.data});
                console.log('data from api/jokes', res.data); 
            })
            .catch(err => {
                
                console.log('err from api/jokes', err)
            })
        } else {
            
        }
    }
  render() {
    return (
        <div className="header">
            <div className="primary-overlay">
                <Navigation/>
                <div className="container">
                    <div className="row signup-section">
                        <div className="col s12">
                            <h2 className="center white-text">List of Jokes:</h2>
                            <ul className="center white-text">
                                {
                                    this.state.jokes.map(joke => (
                                        <li key={ joke.id }>{joke.joke}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Signin;