import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    const signOut = () => {
        localStorage.removeItem('jwt');
    }

    return (
    <nav className="transparent">
        <div className="container">
            <Link to="/" className="brand-logo"><span className="dad-text">Dad</span>Jokes</Link>
    
            <ul className="right">
                <li><NavLink to ="/about">About Dad Jokes</NavLink></li>
                <li><NavLink to ="/signup">Sign Up</NavLink></li>
                <li><NavLink to ="/signin" onClick={ signOut }>Sign Out</NavLink></li>
                <li><a href= "/signin" class="waves-effect waves-light btn red"><i class="material-icons left">lock</i>Sign In</a></li>
                <li>
                    <a href="https://facebook.com">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navigation;