import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Count.css";

class Count extends Component {
  //export default (add)

  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.addHandler = this.addHandler.bind(this);
  }
  componentDidMount() {
    console.log("component did mount confirmed");
  }

  //update
  componentWillReceiveProps(newProps, newContext) {
    console.log("component will receiver new props");
    console.log("newProps", newProps);
    if (newProps.num >= 10) {
      this.setState({
        status: true,
      });
    }
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("should component update Or Not?");
    console.log("newState", newState);
    console.log("newProps", newProps);
    return true;
  }
  addHandler() {
    ReactDOM.render(
      <Count num={this.props.num + 1} />,
      document.getElementById("renderHere")
    );
  }
  render() {
    console.log("component Rendered");
    return (
      <div className="container">
        <h3>Count Component</h3>
        <h3>Number = {this.props.num}</h3>

        <h3 style={{ color: this.state.status ? "green" : "red" }}>
          {this.state.status ? "status True" : "status False"}
        </h3>
        <button className="btnMount" onClick={this.addHandler}>
          Add +1{" "}
        </button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update conformed.");
    console.log("prevState", prevState);
    console.log("prevProps", prevProps);
  }
  componentWillUnmount() {
    console.log("Component unmounted successfully");
  }
}

export default Count;
