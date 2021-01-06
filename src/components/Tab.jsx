import React, { Component } from "react";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import { Link } from "react-router-dom";

export default class Tab extends Component {
  render() {
    return (
      <span>
        <div className="ui top attached tabular menu">
          <Link className="item active">Unanswered</Link>
          <Link className="item active">Answered</Link>
        </div>
        <div className="ui bottom attached tab segment active">
          <Unanswered />
        </div>
      </span>
    );
  }
}
