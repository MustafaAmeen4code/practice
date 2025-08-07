import { Component } from "react";

const name = "Mustafa";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <p>Hello, {name}! This is a simple class component in React.</p>
      </div>
    );
  }
}
export default ClassComponent;
