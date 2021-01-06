import React, { Component } from "react";
import { connect } from "react-redux";

class Unanswered extends Component {
  state = {
    answer: "",
  };
  addState = (event) => {
    const { question } = this.props;
    const value = event.target.value;
    this.setState({ answer: value });
    console.log(this.state.answer);
  };

  render() {
    const {
      textOptionOne,
      textOptionTwo,
      image,
      author,
      authedUser,
    } = this.props;

    return (
      <div>
        <div className="ui card" style={{ marginBottom: "10px" }}>
          <div className="content">
            <div className="right floated meta">Would You rather?</div>
            <div className="left floated meta">{author} asks:</div>
          </div>
          <div className="image">
            <img src={image} style={{ height: "180px" }} />
          </div>
          <div className="content">
            <form className="ui form">
              <div className="radio">
                <input
                  type="radio"
                  name="name"
                  value={"OptionOne"}
                  onChange={this.addState}
                />
                <label style={{ padding: "5px" }}>{textOptionOne}</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="name"
                  value={"OptionTwo"}
                  onChange={this.addState}
                />
                <label style={{ padding: "5px" }}>{textOptionTwo}</label>
              </div>

              <button className="ui fluid button">
                <p className="cl">Send</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ users, questions, authedUser }, { id }) => {
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
  };
};
export default connect(mapStateToProps)(Unanswered);
