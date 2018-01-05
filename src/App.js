import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

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
    const chars = [...this.state.inputText]
      .filter(char => char !== ' ')
      .map(char => <CharComponent char={char}/>);

    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={this.onChangeHandler.bind(this)} />
        <ValidationComponent textLength={this.state.inputText.length} />
        {chars}
      </div>
    );
  }
}

export default App;
