import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flickr from './components/Flickr/Flickr.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="center">
          <section>
            <Flickr />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
