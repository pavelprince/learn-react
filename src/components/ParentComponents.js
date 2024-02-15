import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childname) {
    alert(`Hello  ${this.state.parentName} from ${childname}`); //template literals
  }

  render() {
    return (
      <div>
        <ChildComponent greetParent={this.greetParent} /> {/*pass method as prop*/}
      </div>
    );
  }
}

export default ParentComponents;
