import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import AudioPage from './pages/Audio';
import Hello from './pages/Hello';
import Test from './pages/Test';
import VideoPage from './pages/Video';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/hello" component={Hello} />
        <Route path="/test" exact component={Test} />
        <Route path="/video" exact component={VideoPage} />
        <Route path="/audio" exact component={AudioPage} />
      </Switch>
    </Router>
  );
}
