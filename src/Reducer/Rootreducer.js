import { combineReducers } from "redux";
import FetchReducer from "./FetchReducer";
import Reducer from "./Reducer";


const Rootreducer = combineReducers({
    login:Reducer,
    fetchData:FetchReducer
})
export default Rootreducer