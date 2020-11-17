import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 13,
    };
  }

  action(type) {
    const { counter } = this.state;
    if (type === 'increment') {
      this.setState({
        counter: counter + 1,
      });
    } else if (type === 'decrement') {
      this.setState({
        counter: counter - 1,
      });
    } else {
      this.setState({
        counter: 0,
      });
    }
  }

  render() {
    return (
      <div className='App'>
        <div>{this.state.counter}</div>
        <button
          onClick={() => {
            this.action('decrement');
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.action('increment');
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.action('reset');
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
