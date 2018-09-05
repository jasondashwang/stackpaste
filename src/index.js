import React, { Component } from "react";
import ReactDOM from "react-dom";

class FormContainer extends Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

const wrapper = document.getElementById("app");
ReactDOM.render(<FormContainer />, wrapper);
