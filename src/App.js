import React, { useEffect } from "react";
import { connect } from "react-redux";
import {

  HashRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
// import {HashRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
// import AllformData from "./Maincomponents/AllformData";
import Dashboard from "./Maincomponents/Dashboard";
import Loginform from "./Maincomponents/Loginform";
import { useNavigate } from 'react-router'

// import LoginToRedirectPage from "./Maincomponents/RedirectPage";
// import Registerform from "./Maincomponents/Registerform";
// import { useNavigate } from "react-router";
function App({ loginDetails }) {
// const isNavi=useNavigate()
  return (
    <div className="App">
      {/* <Dashboard/> */}
      {/* <MemoryRouter>   */}
      <HashRouter>    
      {/* <BrowserRouter> */}
        <NavLink to='/'/>
        <NavLink to='/dashboard'/>
        <Routes>
          <Route
            path="/*"
            element={sessionStorage.length>0 ? <Dashboard path='/dashboard'/>:<Loginform path='/'/>}/>
            {/* // element={sessionStorage.length>0 ? <Route path="/dashboard" element={<Dashboard/>}/>:<Route path="/" element={<Loginform/>}/>}/> */}

              {/* <Route path="/register" element={<Registerform/>}/> */}
              {/* <Route path="/" element={<Loginform/>}/> */}
              {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        </Routes>
      {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loginDetails: state.login.users,
  };
};
// export default App;
export default connect(mapStateToProps, null)(App);
