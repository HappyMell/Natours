import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

//Components
import Navigation from "./components/Nav";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/home";
import Book from "./pages/book";
import Stories from "./pages/stories";
import Tours from "./pages/tours";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/book' component={Book} />
            <Route exact path='/stories' component={Stories} />
            <Route exact path='/tours' component={Tours} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
