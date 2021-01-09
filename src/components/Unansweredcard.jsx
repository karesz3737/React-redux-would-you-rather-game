import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Unansweredcard extends Component {
  render() {
    const {
      textOptionOne,
      textOptionTwo,
      image,
      author,
      question,
      id,
    } = this.props;
    if (!question) {
      console.log("hhhh");
    }
    return (
      <div className="bb">
        <div className="ui card fluid">
          <div className="content">
            <div className="ui fluid label">
              <div className="left floated meta">
                <h4 className="tagline">{author} says : Would You Rather?</h4>
              </div>
              <div className="right floated meta">
                <div className="image">
                  <img
                    className="ui tiny fluid image"
                    src={image}
                    alt={author}
                  />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="ui middle aligned list">
                <div className="item">
                  <div className="content">
                    <div className="header">
                      <h4>{textOptionOne}</h4>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">
                      <h3>OR</h3>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">
                      <h4>{textOptionTwo}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <button className="ui fluid button">
                <Link to={`/questions/${id}`}>Go ahead!!!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id];
  const author = question.author;
  const image = users[author].avatarURL;
  const textOptionOne = Object.values(question.optionOne.text).join("");
  const textOptionTwo = Object.values(question.optionTwo.text).join("");
  return {
    question,
    author,
    image,
    textOptionOne,
    textOptionTwo,
  };
};
export default connect(mapStateToProps)(Unansweredcard);
