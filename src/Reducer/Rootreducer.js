import { combineReducers } from "redux";
import FetchReducer from "./FetchReducer";
import Reducer from "./Reducer";
import UpdatingReducer from "./Updatingreducer";

const Rootreducer = combineReducers({
    login:Reducer,
    fetchData:FetchReducer,
    Updating:UpdatingReducer
})
export default Rootreducer