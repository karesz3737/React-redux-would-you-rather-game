import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div className="con">
        <div className="pnf">
          <div className="insert">
            <h1 className="ui header">404</h1>
            <h3 className="ui header">Ooops!</h3>
            <p>We can't find the page you're looking for!</p>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="ui left labeled icon button  right"
        style={{ position: "absolute", bottom: "90px", right: "90px" }}
      >
        <i className="left arrow icon"></i>
        Back Home
      </Link>
    </div>
  );
};

export default Page404;
