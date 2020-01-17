import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Menu from './components/Menu/Menu';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import WorkWithMe from './components/pages/WorkWithMe';

function App() {
  return (
    <div className="App">
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
