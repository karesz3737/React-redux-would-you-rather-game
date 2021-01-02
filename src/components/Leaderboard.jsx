import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LeaderCard from "./LeaderCard";

class Leaderboard extends Component {
  render() {
    const { leaders, authedUser, history } = this.props;

    if (!authedUser) {
      history.push("/");
    }

    return (
      <div className="ui segment" style={{ marginTop: "50px" }}>
        <div className="ui three stackable cards">
          {leaders.map((item, index) => (
            <LeaderCard key={index} leadId={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const sorted = Object.keys(users).sort((a, b) => {
    const aa = Object.keys(users[a].answers).length + users[a].questions.length;
    const bb = Object.keys(users[b].answers).length + users[b].questions.length;
    return bb - aa;
  });
  return {
    authedUser,
    leaders: sorted,
  };
};
export default withRouter(connect(mapStateToProps)(Leaderboard));
