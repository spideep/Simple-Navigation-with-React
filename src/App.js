import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu/Menu';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import WorkWithMe from './components/pages/WorkWithMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <BrowserRouter>
        <div>
          <Menu layout="horizontal" />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Contact" component={Contact} />
            <Route path="/WorkWithMe" component={WorkWithMe} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
