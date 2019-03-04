import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
      <input id="book-search" type="text" className="form-control" {...props} />
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div className="input-group-append">
      <button {...props} className="btn btn-secondary">
        {props.children}
      </button>
    </div>
  );
}
