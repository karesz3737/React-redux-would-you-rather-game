import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navgation from "../Navigation";
import Leaderboard from "../Leaderboard";
import NewPoll from "../newPoll";
import HomeQuestions from "../HomeQuestions";
import TabList from "../TabList";

class Home extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Navgation />
          <Switch>
            <Route path="/" exact component={HomeQuestions} />
            <Route path="/leaderbord" exact component={Leaderboard} />
            <Route path="/add" exact component={NewPoll} />
            <Route path="/questions/:id" exact component={TabList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
