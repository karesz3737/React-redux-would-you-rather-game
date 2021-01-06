import React from "react";

const Error = ({ error }) => {
  return (
    <div className="ui tag">
      <p>{error}</p>
    </div>
  );
};

export default Error;
