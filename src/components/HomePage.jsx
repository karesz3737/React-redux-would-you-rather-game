import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import HomeQuestions from "./HomeQuestions";

class HomePage extends Component {
  render() {
    const { qid } = this.props;

    return (
      <div className="ui container">
        {qid.map((el) => (
          <HomeQuestions id={el} key={el} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = ({ questions }) => {
  const qid = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  return {
    qid: qid,
  };
};
export default withRouter(connect(mapStateToProps)(HomePage));
