import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    const { users, current, LoadingBar } = this.props;

    return (
      <div>
        {!users ? (
          <LoadingBar />
        ) : (
          <div
            className="ui secondary pointing menu"
            style={{ marginTop: "10px" }}
          >
            <Link className="ui mini button " to="/">
              Home
            </Link>
            <Link className="ui button mini" to="/newpoll">
              New Poll
            </Link>
            <Link className="mini ui button" to="/leaders">
              Leader Bord
            </Link>
            <div className="right menu">
              <div className="name">{current.name}</div>
              <div className="ui image">
                <img
                  src={process.env.PUBLIC_URL + current.avatarURL}
                  className="ui mini spaced image"
                  style={{ marginBottom: "-15px" }}
                />
              </div>
              <button
                className="ui right labeled icon button"
                style={{ marginLeft: "10px" }}
              >
                <i className="right arrow icon"></i>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser, LoadingBar }) => {
  return {
    users,
    current: users[authedUser],
    LoadingBar: users !== null,
  };
};
export default connect(mapStateToProps)(Navigation);
