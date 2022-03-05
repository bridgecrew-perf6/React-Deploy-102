import {
  EDIT_USER_FAIL,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
} from "../Actions/Actiontype";
const initialstate = {
  loading: false,
  users: [],
  error: "",
};
function UpdatingReducer(state = initialstate, action) {
  switch (action.type) {
    case EDIT_USER_START:
      // console.log(state)
      return { ...state, loading: true };
      break;
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case EDIT_USER_FAIL:
      return { ...state, loading: false, users: [], error: action.payload };
      break;
    default:
      return state;
      break;
  }
}
export default UpdatingReducer;
