import React from "react";
import "./myStyle.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  let classSize = props.size ? "font-xl" : "";
  return (
    <div>
      <h1 className={`${className} ${classSize}`}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
