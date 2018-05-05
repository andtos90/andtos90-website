import React, { Component } from "react";
import Tree from "./tree/index.js";

class App extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "300px" }}>
        <Tree />
      </div>
    );
  }
}

export default App;
