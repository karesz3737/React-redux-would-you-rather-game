import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    // console.log(this.props);
    const { question } = this.props;
    return (
      <div>
        <p>{question.optionOne.text}</p>
        <p>{question.optionTwo.text}</p>
      </div>
    );
  }
}
const mapStateToProps = ({ questions }, { id }) => {
  return {
    question: questions[id],
  };
};

export default connect(mapStateToProps)(Question);
