import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Answered extends Component {
  render() {
    const {
      image,
      author,
      textOptionOne,
      textOptionTwo,
      question,
      authedUser,
    } = this.props;
    const first = question.optionOne.votes.includes(authedUser);
    const progresOne = question.optionOne.votes.length;
    const progresTwo = question.optionTwo.votes.length;
    const pecentage = first
      ? Math.round((progresOne / (progresOne + progresTwo)) * 100)
      : Math.round((progresTwo / (progresOne + progresTwo)) * 100);

    const totalvotes = progresTwo + progresOne;
    return (
      <div>
        <div className="ui card" style={{ marginBottom: "10px" }}>
          <div className="content">
            <div style={{ textAlign: "center" }}>Answered Questions</div>
          </div>

          <div className="image">
            <img src={image} style={{ height: "180px" }} alt={author} />
          </div>
          <div className="content">
            <div className="textItem">
              <h3 className="ui header" style={{ textTransform: "capitalize" }}>
                {author} asked:
              </h3>
            </div>
            <div>
              <div className="textItem">
                <p>{textOptionOne}</p>
              </div>
              OR
              <div className="textItem">
                <p>{textOptionTwo}</p>
              </div>
            </div>
          </div>
          <div className="content" style={{ border: "none" }}>
            <span className="header">Your Answer Was :</span>
            <div style={{ marginTop: "10px" }}>
              {first ? (
                <h4>{question.optionOne.text}</h4>
              ) : (
                <h4>{question.optionTwo.text}</h4>
              )}
            </div>
            <div className="ui active progress">
              <div className="bar" style={{ width: `${pecentage}%` }}>
                <div className="progress">{pecentage}%</div>
              </div>
              <div className="label">The Current Progress</div>
            </div>
            <div className="item" style={{ textAlign: "center" }}>
              <h4>{totalvotes} out of Total Questions</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, { id }) => {
  const question = questions[id];
  const author = question.author;
  const answers = Object.values(users[authedUser].answers);
  const image = users[author].avatarURL;
  const textOptionOne = Object.values(question.optionOne.text).join("");
  const textOptionTwo = Object.values(question.optionTwo.text).join("");

  return {
    id,
    answers,
    question: question ? question : null,
    author,
    image,
    textOptionOne,
    textOptionTwo,
    first: Object.values(question.optionOne.votes).includes(authedUser),
    second: Object.values(question.optionTwo.votes).includes(authedUser),
    authedUser,
  };
};
export default withRouter(connect(mapStateToProps)(Answered));
