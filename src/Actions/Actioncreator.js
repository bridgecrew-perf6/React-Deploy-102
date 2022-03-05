import axios from "axios";
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,

  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,

  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
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

//updating Details
export const Editstart=()=>{
  return{
    type:EDIT_USER_START
  }
}
export const Editsuccess=(editData)=>{
  return{
    type:EDIT_USER_SUCCESS,
    payload:editData
  }
}
export const Editfail=(dataError)=>{
  return{
    type:EDIT_USER_FAIL,
    payload:dataError
  }
}



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
        password: password
      },
    })
      // console.log(Email)
      .then((response) => {
        const myResp = response.data.responsedata;
        // console.log(myResp)
        dispatch(Loginsuccess(myResp));
        if (response) {
          sessionStorage.setItem("user", JSON.stringify(myResp));
        }
        if(myResp==="")
        {
          alert('Enter Correct Details')
          sessionStorage.removeItem("user")
        }
      })
      .catch((error) => {
        // console.log(error)
        const err = error.message;
        dispatch(Loginfail(err));
      });
  };
};




//fetch details
export const FetchDetails = () => {
  return (dispatch) => {
    dispatch(Fetchstart());
    axios({ method: "GET", url: "http://localhost:8383/getusers" })
      .then((response) => {
        const ErrorData=response.data.data
          // console.log(response)
        dispatch(Fetchsuccess(ErrorData));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(Fetchfail(err));
      });
  };
};


//Edit details actions
export  const EditUserDetails=(id,name,email)=>{
  return(dispatch)=>{
    dispatch(Fetchstart())
    axios({method:'POST',url:"http://localhost:8383/updateuser",
      // data:{
      //   id:id,
      //   name:name,
      //   email:email,
      //   // password:Password
      // }
  })
  .then((response)=>{
    console.log(response)
    dispatch(Fetchsuccess(response))
  })
  .catch((error)=>{
    const err=error.message
    dispatch(Fetchfail(err))
    console.log(err)
  })
  }
}