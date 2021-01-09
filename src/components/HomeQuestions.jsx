import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import AnsweredCard from "./AnsweredCard";
import Unasweredcard from "./Unansweredcard";
class HomeQuestions extends Component {
  render() {
    const { answeredQuestionIds, unansweredQuestionIds } = this.props;

    return (
      <div>
        <h1 className="ui centered header" style={{ paddingTop: "20px" }}>
          Would You Rather?
        </h1>
        <Tabs className="bb">
          <TabList
            className="ui top attached tabular menu item"
            style={{ padding: "10px", border: "none" }}
          >
            <Tab className="ui active fluid button">Unanswered</Tab>
            <Tab className="ui fluid button">Answered</Tab>
          </TabList>

          <TabPanel>
            {unansweredQuestionIds.map((el) => (
              <Unasweredcard id={el} key={el} />
            ))}
          </TabPanel>

          <TabPanel>
            {answeredQuestionIds.map((el) => (
              <AnsweredCard id={el} key={el} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
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
    authedUser,
  };
};
export default withRouter(connect(mapStateToProps)(HomeQuestions));
