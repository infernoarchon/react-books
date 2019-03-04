import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ clear: "both", textAlign: "center", background: "transparent"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
