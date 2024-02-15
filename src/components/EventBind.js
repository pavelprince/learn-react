import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this); // for third approach
  }

//   clickHandler() {
//     this.setState({
//       message: "good bye",
//     });
//     console.log(this);
//   }

  clickHandler = () => {
        this.setState({
      message: "good bye",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> // first approach & its work */} 
        {/* <button onClick={() => this.clickHandler()}>Click</button> // second approach & its work */} 
        <button onClick={() => this.clickHandler()}>Click</button>   {/* official react documeneted approach */}
      </div>
    );
  }
}

export default EventBind;
