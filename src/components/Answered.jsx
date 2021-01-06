import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Answered extends Component {
  render() {
    const {
      image,
      author,
      first,
      second,
      id,
      textOptionOne,
      textOptionTwo,
    } = this.props;

    // const { author, optionOne, optionTwo } = question;

    return (
      <div>
        <div className="ui card" style={{ marginBottom: "10px" }}>
          <div className="content">
            <div style={{ textAlign: "center" }}>Answered Questions</div>
          </div>

          <div className="image">
            <img src={image} style={{ height: "180px" }} />
          </div>
          <div className="content">
            <div className="textItem">
              <p>{author} asked:</p>
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
          <button className="ui fluid button">
            <Link to={`/${id}`}>View Your Answer</Link>
          </button>
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

  // const answerType = Object.values(users[authedUser].answers);

  // const author = questions.answers[0];
  return {
    id,
    answers,
    question,
    author,
    image,
    textOptionOne,
    textOptionTwo,
    first: Object.values(question.optionOne.votes).includes(authedUser),
    second: Object.values(question.optionTwo.votes).includes(authedUser),
  };
};
export default withRouter(connect(mapStateToProps)(Answered));
