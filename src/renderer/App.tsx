import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Hello from './pages/Hello';
import Test from './pages/Test';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>
  );
}
