import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NaviBar } from './components/NaviBar';
import { Jum } from './components/Jum';
import { Footer } from './components/Footer';
import { BottomHeader } from './components/BottomHeader';


function App() {
  return (
    <React.Fragment>
      <NaviBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
      <BottomHeader />
    </React.Fragment>
  );
}

export default App;
