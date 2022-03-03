import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import Loginform from './Loginform'
// import { useDispatch,connect } from 'react-redux'
// import RegisterReducer from '../Reducer/RegisterReducer'

function Registerform() {
  const[state,setState]=useState({
    username:"",
    email:"",
    password:""
  })
  // const dispatch=useDispatch()

 const changingHandler=(e)=> {
    const{name,value}=e.target
    setState({...state,[name]:value})
    // console.log(state)
 }  
 const{username,email,password}=state
 const registerClick=(e)=>{
    e.preventDefault()
    // dispatch(RegisterReducer(username,email,password))
 }
  return (
    <div className="d-flex justify-content-center">
        <form className="w-25 m-3 shadow p-3 mb-5 bg-white rounded">
            <h1 className='bg-success rounded text-white p-3'>Register Form</h1>
            <div className='m-3'>
                <label className='d-block fw-bold'>Username</label>
                <input type='text'placeholder='Enter Your Name'className='w-100 email_input'name='username'onChange={changingHandler}/>
            </div>
            <div className='m-3'>
                <label className='d-block fw-bold'>Email</label>
                <input type='email'placeholder='Enter Your Email Address'className='w-100 email_input'name='email'onChange={changingHandler}/>
            </div>

            <div className='m-3'>
                <label className='d-block fw-bold'>Password</label>
                <input type='password'placeholder='Enter Your Password'className='w-100 password_input'name='password'onChange={changingHandler}/>
            </div>
            
            <div className='justify-content-center d-flex'>          
              <button type='submit' className='btn btn-outline-success d-block w-50' onClick={registerClick}>Register</button>
            </div>
            
            <div className='d-flex justify-content-center mt-3'>         
            <NavLink to='/' className='text-decoration-none'><button type='submit'className='btn btn-warning d-block w-100'>Login</button></NavLink>
            </div>
        </form>
    </div>
  )
}

// const mapStateToProps = (state) =>{
//   return {
//     registerDetails:state.Registeruser
//   }
// }

// export default connect(mapStateToProps,null)(Registerform)
export default Registerform
