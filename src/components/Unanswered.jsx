import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleQuestionToQuestion } from "../actions/questions";
import Page404 from "./Page404";
class Unanswered extends Component {
  state = {
    answer: null,
  };
  addState = (event) => {
    return this.setState({ answer: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, question, history } = this.props;
    const { answer } = this.state;
    const qid = question.id;
    history.push("/");
    dispatch(handleQuestionToQuestion(qid, answer));
  };
  render() {
    const {
      textOptionOne,
      textOptionTwo,
      image,
      author,
      question,
    } = this.props;
    if (question === null) {
      return <Page404 />;
    }

    return (
      <div>
        <div className="ui card" style={{ marginBottom: "10px" }}>
          <div className="content">
            <div className="right floated meta">Would You rather?</div>
            <div className="left floated meta">{author} asks:</div>
          </div>
          <div className="image">
            <img src={image} style={{ height: "180px" }} alt={author} />
          </div>
          <div className="content">
            <form className="ui form" onSubmit={this.handleSubmit}>
              <div className="radio">
                <input
                  type="radio"
                  name="nameradio"
                  value="optionOne"
                  onChange={this.addState}
                />

                <label style={{ padding: "5px" }}>{textOptionOne}</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="nameradio"
                  value="optionTwo"
                  onChange={this.addState}
                />
                <label style={{ padding: "5px" }}>{textOptionTwo}</label>
              </div>

              <button
                className="ui fluid button"
                type="submit"
                disabled={!this.state.answer && "disabled"}
              >
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
    question: question ? question : null,
    textOptionOne,
    textOptionTwo,
    author,
    image,
    authedUser,
  };
};
export default withRouter(connect(mapStateToProps)(Unanswered));
