import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navgation from "../Navigation";
import Leaderboard from "../Leaderboard";
import NewPoll from "../newPoll";
import ShowCard from "../ShowCard";
import HomeQuestions from "../HomeQuestions";

class Home extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Navgation />
          <Switch>
            <Route path="/" exact component={HomeQuestions} />
            <Route path="/leaders" exact component={Leaderboard} />
            <Route path="/newpoll" exact component={NewPoll} />
            <Route path="/:id" exact component={ShowCard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
