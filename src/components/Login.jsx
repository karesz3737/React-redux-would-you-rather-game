import React, { Component } from "react";
import { connect } from "react-redux";
import { addAuthUser } from "../actions/authUser";

class Login extends Component {
  state = { userId: "" };

  onChange = (event) => {
    const curr = event.target.value;
    this.setState({ userId: curr });
  };

  FormSubmit = (event) => {
    const { dispatch } = this.props;
    const { userId } = this.state;
    event.preventDefault();
    dispatch(addAuthUser(userId));
  };
  render() {
    const { users } = this.props;

    return (
      <div className="ui segment">
        <div>
          <img
            className="ui centered medium image"
            src={process.env.PUBLIC_URL + "/images/38223.svg"}
            alt="Logo"
          />
        </div>
        <form className="ui form container" onSubmit={this.FormSubmit}>
          <div className="field">
            <label
              style={{
                textAlign: "center",
                fontFamily: "Fantasy",
                fontWeight: "Bold",
                lineHeight: "3rem",
              }}
            >
              Sign In!
            </label>
            <select className="ui menu" onChange={this.onChange}>
              <option value="choose" defaultChecked>
                Choose one...
              </option>
              {Object.values(users).map((user) => (
                <option key={user.id} className="ui fluid item" value={user.id}>
                  {user.id}
                </option>
              ))}
            </select>
            <button className="fluid ui button">
              <p className="cl">Click</p>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};
{
  /* <img
src={process.env.PUBLIC_URL + el.avatarURL}
className="ui avatar image bordered"
alt={el.id}
/> */
}
export default connect(mapStateToProps)(Login);
