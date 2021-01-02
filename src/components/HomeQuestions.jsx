import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Unanswered from "./Unanswered";
import Answered from "./Answered";

class HomeQuestions extends Component {
  render() {
    const { unanswered, answered } = this.props;

    // const vv = unanswered.filter((item) => item !== null);

    return (
      <div>
        <div className="ui two column very relaxed grid ">
          <div className="column">
            {unanswered !== null && <Unanswered id={unanswered} />}
          </div>
          <div className="column">
            {answered !== null && <Answered id={answered} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }, { id }) => {
  const question = questions[id];

  const vote1 = Object.values(question.optionOne.votes).includes(authedUser);
  const vote2 = Object.values(question.optionTwo.votes).includes(authedUser);

  return {
    unanswered: !vote1 && !vote2 ? id : null,
    answered: vote1 || vote2 ? id : null,
  };
};
export default withRouter(connect(mapStateToProps)(HomeQuestions));
