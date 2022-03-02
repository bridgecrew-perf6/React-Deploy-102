import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from "../Actions/Actiontype";


const initialstate = {
  loading: false,
  users: [],
  error: "",
};
function Reducer(state = initialstate, action) {
  switch (action.type) {
    case LOGIN_USER_START:
    // console.log(state)
      return { ...state, loading: true };
      break;
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, users: [], error: action.payload };
      break;
    default:
      return state;
      break;
  }
}
export default Reducer;