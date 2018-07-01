import React, { Component } from 'react';
import './App.css';
import animals from "./animals.json";

class App extends Component {

  state = {
    animals
  }

  render() {

    return (
      <div className="App">
        <nav className="navbar">
          <ul>
            <li className="App-name">
              <a href="/">Clicky Game</a>
            </li>
            <li className="guess-notification">
              Click an Image to Begin!
            </li>
            <li className="score-keeper">
              Score: 0 | Top Score: 0
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <h1>Clicky Game!</h1>
          <h2>Click an image to earn points, but don't click on any more than once!</h2>
        </header>
        <main className="container">
        {this.state.animals.map((animal) => (
          <div key={animal.id} className="image-holder">
            <img src={animal.source} alt={animal.name}/>
          </div>
        ))}
        </main>
        <footer className="footer">
          <div className="bottom">
            Clicky Game 
           {/* <img src="./images/react.png" alt="react"/> */}
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
