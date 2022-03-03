import React, { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FetchDetails, LoginWithusers } from '../Actions/Actioncreator'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
function Loginform({loginDetails}) {
  const [state,setState]=useState({
    email:"",
    password:"",
  })
  // const[error,setError]=useState({
  //   emailError:"",
  //   passwordError:""
  // })
const dispatch=useDispatch()
const isNavigate=useNavigate()
  const {email,password}=state
  // const {emailError,passwordError}=error
  // const{error,success}=corrections
  const Submitted=(e)=>{
    e.preventDefault()
    dispatch(LoginWithusers(email,password))
    
    if(sessionStorage.length>0){
      isNavigate('/dashboard')
    }

    // if(sessionStorage.user.length=="")
    // {
    //   sessionStorage.removeItem('user')
    //   sessionStorage.clear()
    //   setError({emailError:"enter correct email",passwordError:'enter correct password'})
    // }
  } 
  const changingHandler=(e)=>{
    const{name,value}=e.target
    setState({...state,[name]:value})
    // setState({...state,[e.target.name]:e.target.value})
    }
  return (
    <div className="d-flex justify-content-center">
        <form className="w-25 m-3 shadow p-3 mb-5 bg-white rounded" onSubmit={Submitted}>
            <h1 className='bg-success rounded text-white p-3'>Login Form</h1>
             {/* <p className="bg-danger text-white">{corrections.error}</p>
             <p className="bg-success text-white">{corrections.success}</p> */}
            <div className='m-3'>
                <label className='d-block fw-bold'>Email</label>
                <input type='email'placeholder='Enter Your Email Address'className='w-100 email_input'name='email'onChange={changingHandler}value={email}/>
            </div>
            <div className='m-3'>
                <label className='d-block fw-bold'>Password</label>
                <input type='password'placeholder='Enter Your Password'className='w-100 password_input'name='password'onChange={changingHandler} value={password}/>
            </div>
           {/* <div>{emailError}</div> 
            {console.log(emailError)} */}
            <div className='justify-content-center d-flex'>          
              <button type='submit' className='btn btn-outline-success d-block w-50 '>SUBMIT</button>
            </div>
            {/* {error?<p className='bg-success'>submitted successfully</p>:<p>Enter Correct Details</p>} */}
            {/* <div className='justify-content-center d-flex'>          
            <NavLink to='/register' className="text-decoration-none"> <button type='submit'className='btn btn-danger m-2 d-block w-100'>REGISTER</button></NavLink> 
            </div> */}
        </form>
        {/* {console.log(sessionStorage.user.length)} */}
    {console.log(sessionStorage.user)}
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    loginDetails:state.login.users
  }
}
export default connect(mapStateToProps,null)(Loginform)
