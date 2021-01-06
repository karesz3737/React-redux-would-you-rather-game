import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
class HomeQuestions extends Component {
  render() {
    const { answeredQuestionIds, unansweredQuestionIds } = this.props;

    return (
      <div className=" ui segment container">
        <div className="gridI">
          <div className="column">
            <div className="ui header centered">Unaswered</div>
            {unansweredQuestionIds.map((el) => (
              <Unanswered id={el} key={el} />
            ))}
          </div>
          <div className=" column">
            <div className="ui header centered">Answered</div>

            {answeredQuestionIds.map((el) => (
              <Answered id={el} key={el} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="ui bottom attached active tab segment">
 {unansweredQuestionIds.map((el) => (
            <Unanswered id={el} key={el} />
          ))}
</div>
<div
className="ui bottom attached active tab segment"
data-tab="second"
>
{answeredQuestionIds.map((el) => (
  <Answered id={el} key={el} />
))}
</div> */
}
const mapStateToProps = ({ questions, authedUser }) => {
  return {
    answeredQuestionIds: Object.keys(questions)
      .filter(
        (question) =>
          questions[question].optionOne.votes.indexOf(authedUser) > -1 ||
          questions[question].optionTwo.votes.indexOf(authedUser) > -1
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unansweredQuestionIds: Object.keys(questions)
      .filter(
        (question) =>
          questions[question].optionOne.votes.indexOf(authedUser) === -1 &&
          questions[question].optionTwo.votes.indexOf(authedUser) === -1
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
};
export default withRouter(connect(mapStateToProps)(HomeQuestions));
