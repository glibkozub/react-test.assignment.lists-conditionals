import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputText: '',
  };

  onChangeHandler = (e) => {
    // let newState = [...this.state];
    this.setState({
      inputText: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={this.onChangeHandler.bind(this)} />
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
