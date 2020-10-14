import React from "react";
// import logo from './logo.svg';
// import './App.css';

import {
  HashRouter as Router,
  NavLink,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import "./styles/app.css";
import "./pages/NotFound";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      111
      <hr />
      <Router>
        <NavLink exact to="/">
          首页
        </NavLink>
        <NavLink to="/about">关于</NavLink>
        <NavLink to="/list">列表</NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list" component={List} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
