import axios from "axios";
import {
  FETCH_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  FETCH_USER_START,
  FETCH_USER_FAIL,
} from "./Actiontype";
export const Loginstart = () => {
  return {
    type: LOGIN_USER_START,
  };
};
export const Loginsuccess = (users) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: users,
  };
};
export const Loginfail = (error) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: error,
  };
};

//FETCH DATA
export const Fetchstart = () => {
  return {
    type: FETCH_USER_START,
  };
};
export const Fetchsuccess = (usersdata) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: usersdata,
  };
};
export const Fetchfail = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};
//login details operation
export const LoginWithusers = (email, password) => {
  // console.log(email,password)
  return (dispatch) => {
    dispatch(Loginstart());
    axios({
      method: "POST",
      url: "http://localhost:8383/login",
      data: {
        email: email,
        password: password,
      },
    })
      // console.log(Email)
      .then((response) => {
        const myResp = response.data.responsedata;
        dispatch(Loginsuccess(myResp));
        if (response) {
          sessionStorage.setItem("user", JSON.stringify(myResp));
        }
        // console.log(response.data.responsedata)
      })
      .catch((error) => {
        // console.log(error)
        const err = error.message;
        dispatch(Loginfail(err));
      });
  };
};
export const FetchDetails = () => {
  return (dispatch) => {
    dispatch(Fetchstart());
    axios({ method: "GET", url: "http://localhost:8383/getusers" })
      .then((response) => {
        const ErrorData=response.data.data
        // window.location.reload(true);
        dispatch(Fetchsuccess(ErrorData));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(Fetchfail(err));
      });
  };
};
