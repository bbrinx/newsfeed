import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/config';

import Header from './components/header'
import PoliticsContainer from './containers/politicsContainer'
import Sports from './containers/sportsContainer'
import Architecture from './containers/architectureContainer'
import Germany from './containers/germanyContainer'
import Food from './containers/foodContainer'
import './App.css';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router>
          <div className="newsfeed">
            <Header />
            <div className="content-wrapper">
              <div className="content">
                <Route exact path="/" component={PoliticsContainer} />
                <Route path="/politics" component={PoliticsContainer} />
                <Route path="/germany" component={Germany} />
                <Route path="/sports" component={Sports} />
                <Route path="/architecture" component={Architecture} />
                <Route path="/food" component={Food} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;