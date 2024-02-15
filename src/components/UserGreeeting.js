import React, { Component } from "react";

class UserGreeeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //show shomething when Logged In and nothing when not Logged In (shortcircuit operator)
    return this.state.isLoggedIn && <div>Welcome User</div>;

    //approach 3 by using ternary operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome User</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //approach 2 works
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome User</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // approach 1 works using element variable
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome User</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeeting;
