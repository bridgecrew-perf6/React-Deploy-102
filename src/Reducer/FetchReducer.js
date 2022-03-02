import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
  } from "../Actions/Actiontype";
  const initialstate = {
    loading: false,
    users: [],
    error: "",
  };
  function FetchReducer(state = initialstate, action) {
    switch (action.type) {
      case FETCH_USER_START:
      // console.log(state)
        return { ...state, loading: true };
        break;
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: "",
        };
      case FETCH_USER_FAIL:
        return { ...state, loading: false, users: [], error: action.payload };
        break;
      default:
        return state;
        break;
    }
  }
  export default FetchReducer;