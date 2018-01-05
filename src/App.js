import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent';

class App extends Component {
  state = {
    inputText: 'placeholder data',
  };

  onChangeHandler = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={this.onChangeHandler.bind(this)} />
        <ValidationComponent textLength={this.state.inputText.length}/>
      </div>
    );
  }
}

export default App;
