import React, { Component } from 'react';
import { Home, Info } from './pages';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/info'>Info</Link>
        </li>
      </ul>
          <main>
            <Route path='/home' component={Home}/>
            <Route path='/info' component={Info}/>
          </main>
      </div>
      </Router>
      
    );
  }
}

export default App;
