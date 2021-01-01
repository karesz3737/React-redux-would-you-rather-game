import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { handleQuestions } from "../actions/questions";
class NewPoll extends Component {
  state = {
    questionOne: "",
    questionTwo: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: [value] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { authedUser, dispatch } = this.props;
    const { questionOne, questionTwo } = this.state;
    const { name, value } = event.target;
    dispatch(handleQuestions(questionOne, questionTwo, authedUser));
    return this.props.history.push("/");
  };
  render() {
    const { authedUser } = this.props;
    const { setDisabled } = this.state;

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
          />
        </div>
        <div className="ui form" style={{ marginTop: "200px" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="two fields ">
              <div className="field">
                <label>First Question</label>
                <input
                  name="questionOne"
                  type="text"
                  placeholder="Your first question"
                  value={this.state.questionOne}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label>Second Question</label>
                <input
                  name="questionTwo"
                  type="text"
                  placeholder="Your Second Question"
                  on
                  value={this.state.questionTwo}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="ui fluid button">Submit</button>
          </form>
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
