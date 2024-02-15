import React from "react";

function ChildComponent(prop) {
  return (
    <div>
      <button onClick={() => prop.greetParent("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
