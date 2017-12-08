import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movies!!!</h1>
        </header>
        <p className="App-intro">
          Here are some movies:
        </p>
        <Movie title ="The Force Awakens" episode="VII" hours="2" minutes="15"></Movie>
        <Movie title="The Last Jedi" episode="VIII" hours="2" minutes="32"></Movie>
        <Movie title="Jar Jar's Revenge" episode="IX" hours="3" minutes="14"></Movie>
      </div>
    );
  }
}

export default App;
