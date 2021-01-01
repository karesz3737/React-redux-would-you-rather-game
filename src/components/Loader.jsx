import React from "react";

const Loader = () => {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui massive text loader">Loading</div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
