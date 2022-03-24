import "./styles.css";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import About from './components/About'


export default function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
