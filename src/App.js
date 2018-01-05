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

  removeClickedElement = (charIndex) => {
    let newCharsArray = [...this.state.inputText];
    newCharsArray.splice(charIndex, 1);

    this.setState({
      inputText: newCharsArray.join(''),
    });
  };

  render() {
    const Chars = [...this.state.inputText]
      .filter(char => char !== ' ')
      .map((char, i) => <CharComponent key={i} char={char} removeClickedElement={() => this.removeClickedElement(i)} />);

    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={this.onChangeHandler.bind(this)} />
        <ValidationComponent textLength={this.state.inputText.length} />
        {Chars}
      </div>
    );
  }
}

export default App;
