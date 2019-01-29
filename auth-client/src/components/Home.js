import React from 'react';
import Navigation from './Navigation';
import '../App.css';

const Home = () => {
    return (
    <div className="main-header">
        <div className="primary-overlay">
            <div className="added-overlay">
            <Navigation/>
            <div className="container showcase">
                <div className="row">
                    <div className=" col 12 right">
                    <h1>Looking for funny jokes?</h1>
                    <p>You're in the right place. Come laugh at the most popular 
                        upadated database of jokes on the planet.
                    </p>
                    <br></br>
                    <a href="#" className="btn btn-large white red-text learn-btn" onClick="">Learn More</a>
                    <a href="/signup" className="btn btn-large red white-text" onClick="">Sign Up </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;