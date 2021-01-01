import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";
import { compose } from "react";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// NOT AN OBJECT
export default composeEnhancers(applyMiddleware(thunk, logger));
