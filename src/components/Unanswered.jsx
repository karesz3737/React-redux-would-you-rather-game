import React, { Component } from "react";
import { connect } from "react-redux";

class Unanswered extends Component {
  render() {
    const { textOptionOne, textOptionTwo, image, author } = this.props;

    return (
      <div className="ui container">
        <div className="ui card">
          <div className="content">
            <div className="right floated meta">Would You rather?</div>
            <div className="left floated meta">{author} asks:</div>
          </div>
          <div className="image">
            <img src={image} style={{ height: "180px" }} />
          </div>
          <div className="content">
            <form className="ui form">
              <div className="ui checkbox">
                <input type="checkbox" />
                <label>{textOptionOne}</label>
              </div>
              <div className="ui checkbox">
                <input type="checkbox" />
                <label>{textOptionTwo}</label>
              </div>

              <button className="ui fluid button">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];

  const author = question.author;
  const textOptionOne = Object.values(question.optionOne.text).join("");
  const textOptionTwo = Object.values(question.optionTwo.text).join("");
  const image = users[author].avatarURL;

  return {
    question,
    textOptionOne,
    textOptionTwo,
    author,
    image,
    authedUser,
  };
};
export default connect(mapStateToProps)(Unanswered);
