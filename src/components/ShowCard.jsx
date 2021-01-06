import React, { Component } from "react";
import { connect } from "react-redux";

class ShowCard extends Component {
  render() {
    const { match, users, questions, authedUser } = this.props;
    const id = match.params.id;
    const { optionOne, optionTwo, author } = questions;
    const first = questions[id].optionOne.votes.includes(authedUser);
    const second = questions[id].optionTwo.votes.includes(authedUser);

    const progresOne = questions[id].optionOne.votes.length;
    const progresTwo = questions[id].optionTwo.votes.length;
    const totalvotes = progresTwo + progresOne;
    const pecentage = first
      ? Math.round((progresOne / totalvotes) * 100)
      : Math.round((progresTwo / totalvotes) * 100);
    console.log(pecentage);
    const image = users[questions[id].author].avatarURL;
    console.log(image);
    return (
      <div className="ui centered card">
        <div className="ui image">
          <img src={image} />
        </div>
        <div className="content">
          <span className="header">Your Answer Was :</span>
          <div style={{ marginTop: "10px" }}>
            {first ? (
              <h4>{questions[id].optionOne.text}</h4>
            ) : (
              <h4>{questions[id].optionTwo.text}</h4>
            )}
          </div>
          <div className="ui active progress">
            <div className="bar" style={{ width: `${pecentage}%` }}>
              <div className="progress">{pecentage} %</div>
            </div>
            <div className="label">The Current Progress</div>
          </div>
          <div className="item" style={{ textAlign: "center" }}>
            <h4>{totalvotes} out of Total Questions</h4>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ users, questions, authedUser }) => {
  return {
    questions,
    authedUser,
    users,
  };
};
export default connect(mapStateToProps)(ShowCard);
