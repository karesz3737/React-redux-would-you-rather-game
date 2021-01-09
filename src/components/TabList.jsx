import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Page404 from "./Page404";
import Answered from "./Answered";
import Unanswered from "./Unanswered";

class TabList extends Component {
  render() {
    const { answeredQue, question, id } = this.props;
    console.log(id);
    if (question === null) {
      return <Page404 />;
    }
    return (
      <div className="centered-box">
        <h2
          className="ui header"
          style={{ position: "absolute", left: "10%", top: "-10%" }}
        >
          Would You Rather?
        </h2>
        {answeredQue.hasOwnProperty(id) ? (
          <Answered id={id} />
        ) : (
          <Unanswered id={id} />
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ users, questions, answers, authedUser }, props) => {
  const { id } = props.match.params;

  const answeredQue = users[authedUser].answers;

  return {
    questions,
    users,
    answeredQue,
    id,
    question: questions[id] ? questions[id] : null,
  };
};
export default withRouter(connect(mapStateToProps)(TabList));
