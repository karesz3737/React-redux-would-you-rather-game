import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderCard extends Component {
  render() {
    const { leaders } = this.props;
    return (
      <div className="card">
        <div className="image">
          <img
            src={leaders.avatarURL}
            style={{ maxHeight: "250px" }}
            alt={leaders.name}
          />
        </div>
        <div className="content">
          <span style={{ fontWeight: "600" }}>{leaders.name}</span>
          <div className="ui labels">
            <span className="ui label">
              Answered Questions: {Object.keys(leaders.answers).length}
            </span>
            <span className="ui label">
              Created Questions: {leaders.questions.length}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ users }, { leadId }) => {
  return {
    leaders: users[leadId],
  };
};
export default connect(mapStateToProps)(LeaderCard);
