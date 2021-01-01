import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import handleAddData from "../actions/shared";
import { addAuthUser, resetUser } from "../actions/authUser";
import Login from "../components/Login";
import Home from "../components/containers/Home";
import HomePage from "./HomePage";
import Loader from "./Loader";
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleAddData());
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(resetUser());
  }
  render() {
    const { isSignedIn, users, LoadingBar } = this.props;
    if (!LoadingBar.default === undefined || LoadingBar.default === 1) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else {
      return <Fragment>{!isSignedIn ? <Login /> : <Home />}</Fragment>;
    }
  }
}
const mapStateToProps = ({ authedUser, users, LoadingBar }) => {
  return {
    isSignedIn: authedUser !== null,
    users,
    LoadingBar,
  };
};
export default connect(mapStateToProps)(App);
