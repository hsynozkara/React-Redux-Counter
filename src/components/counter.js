import React, { Component } from "react";
import { connect } from "react-redux";
import rootStore from "../store/index";
class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => rootStore.dispatch({ type: "INCREMENT" })}>
          +
        </button>
        <h2>{this.props.count}</h2>
        <button onClick={() => rootStore.dispatch({ type: "DECREMENT" })}>
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

export default connect(mapStateToProps)(Counter);
