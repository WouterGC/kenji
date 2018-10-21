import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
          
            <Route 
              path="/" component={NavBar}
            />
            <Route
               exact path="/" render={routeProps => <Home {...routeProps} a={'b'}/>}
            />
            <Route
                path="/recept" render={routeProps => <Recept {...routeProps} a={'b'}/>}
             />
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

const Home = (props) =>
    <div className="homeeerrrrr"><h2>Home</h2></div>


const NavBar = ({match, location}) => 
  <div>
    {location.pathname !== "/" && <Link className="home" to="/" style={{marginRight: 10, paddingLeft: 10}}>Home</Link>}
    <Link className="recepten" to="/recept">Recept</Link>
  </div>

