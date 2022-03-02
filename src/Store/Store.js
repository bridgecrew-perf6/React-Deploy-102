import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Rootreducer from "../Reducer/Rootreducer";


const store = createStore(Rootreducer,composeWithDevTools(applyMiddleware(logger,thunk)))
// const store = createStore(Rootreducer,applyMiddleware(thunk))

export default store;