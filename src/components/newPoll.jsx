import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { handleQuestions } from "../actions/questions";
import Error from "./Error";
class NewPoll extends Component {
  state = {
    questionOne: "",
    questionTwo: "",
    errorMsg: null,
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: [value] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { authedUser, dispatch } = this.props;
    const { questionOne, questionTwo } = this.state;

    if (questionOne.length === 0 || questionTwo.length === 0) {
      this.setState({
        errorMsg: "Both fields must be completed!",
        questionOne: "",
        questionTwo: "",
      });
      return;
    } else if (questionOne[0] === questionTwo[0]) {
      this.setState({
        errorMsg: "Questions cannot be same!!",
        questionOne: "",
        questionTwo: "",
      });
      return;
    } else if (questionOne[0].length <= 8 || questionTwo[0].length <= 8) {
      this.setState({
        errorMsg: "Length min 8 characters",
        questionOne: "",
        questionTwo: "",
      });
      return;
    }
    dispatch(handleQuestions(questionOne, questionTwo, authedUser));

    return this.props.history.push("/");
  };
  render() {
    const { authedUser } = this.props;
    const { errorMsg } = this.state;

    if (!authedUser) {
      return <Redirect to="/page404" />;
    }
    return (
      <div className="ui container">
        <div className="ui segment" style={{ border: "none" }}>
          <h2 className="ui center aligned header">Add a New Question</h2>
          <img
            src={process.env.PUBLIC_URL + "/images/38223.svg"}
            className="ui fluid centered small image"
            alt="Logo"
          />
        </div>
        <div className="ui form container" style={{ marginTop: "200px" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="two fields ">
              <div className="field">
                <label>First Question</label>
                <input
                  name="questionOne"
                  type="text"
                  placeholder="Your first question"
                  value={this.state.questionOne || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label>Second Question</label>
                <input
                  name="questionTwo"
                  type="text"
                  placeholder="Your Second Question"
                  value={this.state.questionTwo || ""}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="ui fluid button" type="submit">
              Submit
            </button>
          </form>
          <div className="error">{errorMsg && <Error error={errorMsg} />}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};
export default withRouter(connect(mapStateToProps)(NewPoll));
