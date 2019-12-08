import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import HomePage from './components/pages/HomePage';
import TestPage from './components/pages/TestPage';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         loading: true,
         users_data: []
    }
  }
  render() {
    return (
      <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/test" component={TestPage} />

        </Switch>
      </Router>

      </div>
    )
    
  }
}

export default App
