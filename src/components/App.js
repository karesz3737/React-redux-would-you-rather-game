import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import handleAddData from "../actions/shared";
import { resetAuthUser } from "../actions/authUser";
import Login from "../components/Login";
import Home from "../components/containers/Home";
import Loader from "./Loader";
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleAddData());
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(resetAuthUser());
  }
  render() {
    const { isSignedIn, LoadingBar } = this.props;
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
const mapStateToProps = ({ authedUser, LoadingBar }) => {
  return {
    isSignedIn: authedUser !== null,
    LoadingBar,
  };
};
export default connect(mapStateToProps)(App);
