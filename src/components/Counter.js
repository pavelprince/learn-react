import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.state.count = this.state.count + 1;

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  increment5() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment5()}>Subscribe</button>
      </div>
    );
  }
}

export default Counter;
