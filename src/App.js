import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Menu from './components/Menu/Menu';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import WorkWithMe from './components/pages/WorkWithMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Menu layout="horizontal" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/WorkWithMe" component={WorkWithMe} />
            <Route path="/About" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
