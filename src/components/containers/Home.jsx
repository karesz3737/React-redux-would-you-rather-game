import React, { Component, Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../HomePage";
import Navgation from "../Navigation";
import Login from "../Login";
import Page404 from "../Page404";
import Leaderboard from "../Leaderboard";
import NewPoll from "../newPoll";

class Home extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Navgation />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/404" exact component={Page404} />
            <Route path="/leaders" exact component={Leaderboard} />
            <Route path="/newpoll" exact component={NewPoll} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
