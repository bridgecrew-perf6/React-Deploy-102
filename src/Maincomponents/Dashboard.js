import React, { useEffect,useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FetchDetails } from "../Actions/Actioncreator";
import './Dashboard.css'
import { Modal, Button } from "react-bootstrap";
import Popupform from "./Popupform";
// import Popupform from "./Popupform";
// import AllformData from './AllformData'
// import Loginform from './Loginform'
// import { LogoutUser } from '../Actions/Actioncreator'
function Dashboard({ fetchingTheData }) {

  const dispatch = useDispatch();
  const isNavi = useNavigate();
  const logoutbutton = (e) => {
    // debugger;
    e.preventDefault();
    if (sessionStorage.length > 0) {
      // debugger
      sessionStorage.removeItem("user");
      isNavi("/");
      // alert('hello')
      // console.log('logout button')
    }
  };
  useEffect(() => {
    if (sessionStorage.length > 0) {
      dispatch(FetchDetails());
    }
  }, []);
  var data = JSON.parse(sessionStorage.getItem("user"));
// const ClickEvent=(user)=>{
//   alert('update')
//   console.log(user.Id)
//   console.log(user.Name)
//   console.log(user.Email)
//   // submitData()
// }
  return (
    <div>
      <div className="bg-success d-flex justify-content-end sticky-top">
        {/* {console.log("return statement")} */}
        {data.length > 0
          ? data.map((current, index) => {
              return (
                <div key={index}>
                  <img src="https://www.afinoz.com/author.webp" height="40px" />
                  <span className="text-white m-3">Id:{current?.Id}</span>
                  <span className="text-white m-3">
                    ProfileName:{current?.Name}
                  </span>
                  <button
                    className="btn btn-light m-3 text-black"
                    onClick={logoutbutton}
                  >
                    Logout
                  </button>
                </div>
              );
            })
          : isNavi("/")}
      </div>
      <h2>Welcome to Dashboard Page</h2>
      {/* <AllformData/> */}
      <button className="d-flex justify-content-center btn btn-success m-3">
        create
      </button>
      <table className="table table-striped table-dark container table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Active Status</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {fetchingTheData.length > 0 &&
            fetchingTheData.map((formDetails) => {
              return (
                <tr key={formDetails.Id}>
                  <td>{formDetails.Id}</td>
                  <td>{formDetails.Name}</td>
                  <td>{formDetails.Email}</td>
                  <td>{formDetails.Password}</td>
                  <td>{formDetails.Active}</td>
                  <td className="text-black">
                    <Popupform Id={formDetails.Id} Name={formDetails.Name} Email={formDetails.Email}>
                    </Popupform>
                  </td>
                  <td>
                    {" "}
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* <form onSubmit={ClickEvent()}>
        <label>Name</label>
        <input type='text'/>
        <label>Email</label>
        <input type='text'/>
        <label>Password</label>
        <input type='email'/>

      </form> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    // loginDetails:state.login.users,
    fetchingTheData: state.fetchData.users,
  };
};
// export default Dashboard
export default connect(mapStateToProps, null)(Dashboard)
