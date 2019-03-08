import React, { Component } from "react";
import { connect } from "dva";

@connect(store => {
  return { ...store.Home };
})
export default class HomePage extends Component {
  render() {
    return (
      <div>
        Page页面
        <button>-</button>
        <span>{this.props.count}</span>
        <button
          onClick={() => {
            this.props.dispatch({
                type:'Home/changeCount',
                payload:1
            })
          }}
        >
          +
        </button>
      </div>
    );
  }
}
