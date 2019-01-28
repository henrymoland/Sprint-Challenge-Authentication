import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Jokes from './components/Jokes';
import About from './components/About';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route path="/signup" component={ Signup } />
          <Route path="/signin" component={ Signin } />
          <Route path="/jokes" component={ Jokes } />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
