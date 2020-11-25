import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import About from './components/pages/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
class App extends Component {
  componentDidMount() {
    axios.get('https://api.github.com/users').then(res => console.log('Response from github', res.data))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar name='Sara' />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <UserItem />
                <Users />
              </Fragment>
            )} />
          </Switch>


        </div>

        <Route exact path='/about' component={About} />

      </Router>
    );
  }
}

export default App;
