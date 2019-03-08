import React, { Component } from "react";
import { connect } from "dva";

@connect(store => {
    return { ...store.Look };
})

export default class LookPage extends Component {
  render() {
    return (
      <div>
        Look页面
      </div>
    );
  }
}
