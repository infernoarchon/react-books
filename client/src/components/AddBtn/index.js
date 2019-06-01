import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    <button className="add-btn btn btn-sm btn-primary" {...props} role="button" tabIndex="0">
      <strong>+ Add to Favorites</strong>
    </button>
  );
}

export default AddBtn;
