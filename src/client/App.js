import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header'
import Politics from './pages/politics'
import Sports from './pages/sports'
import Video from './pages/video'
import Architecture from './pages/architecture'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="newsfeed">
        <Header />
        <div className="content-wrapper">
          <div className="content">
            <Route exact path="/" component={Politics} />
            <Route path="/politics" component={Politics} />
            <Route path="/sports" component={Sports} />
            <Route path="/video" component={Video} />
            <Route path="/architecture" component={Architecture} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;