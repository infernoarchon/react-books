import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ clear: "both", textAlign: "center", background: "transparent"}}
      className="jumbotron mb-0"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
