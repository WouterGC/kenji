import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Link to="/recept">Recept</Link>
            <Route
                path="/recept" render={routeProps => <Recept {...routeProps} a={'b'}/>}/>
          </div>
        </Router>
    );
  }
}

export default App;

const Recept = ({match, a}) => {
    console.log(a);
    return (
        <div>
            <h2>Recept: {a}</h2>
        </div>)
}


