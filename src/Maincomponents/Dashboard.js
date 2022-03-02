import React, { useEffect } from 'react'
import { connect, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router'
import { FetchDetails } from '../Actions/Actioncreator'
// import AllformData from './AllformData'
// import Loginform from './Loginform'
// import { LogoutUser } from '../Actions/Actioncreator'
function Dashboard({fetchingTheData}) {
  const dispatch=useDispatch()
  const userNavi=useNavigate()
  const logoutbutton=(e)=>{
    // debugger;
    e.preventDefault()
    if(sessionStorage.length>0){
      // debugger
      sessionStorage.removeItem("user")
      userNavi('/')
    }
  }
  useEffect(()=>{
    if(sessionStorage.length>0)
    {
      dispatch(FetchDetails())
    }
  },[])
  var data = JSON.parse(sessionStorage.getItem('user'));
  // var Alldata = JSON.parse(sessionStorage.getItem('Alldata'));
  console.log(data)
  return (
    <>    
  <div className='bg-danger d-flex justify-content-end'>
            {data.map((current,index)=>{
              return  <div key={index}>
                  <span className='text-white m-3'>Id:{current?.Id}</span> 
                  <span className='text-white m-3'>ProfileName:{current?.Name}</span>
                  <button className='btn btn-light m-3 text-black' onClick={logoutbutton}>Logout</button>
              </div>
              })
            }
  </div>
          <h2>Welcome to Dashboard Page</h2>
         {/* <AllformData/> */}
         <table className="table table-striped table-dark container table-hover">
            <thead>      
            <tr>    
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Active Status</th>
            </tr> 
            </thead>
            <tbody>
            {fetchingTheData.length>0&&fetchingTheData.map((formDetails)=>{
              return <tr key={formDetails.Id}>
                      <td>{formDetails.Id}</td>
                      <td>{formDetails.Name}</td>
                      <td>{formDetails.Email}</td>
                      <td>{formDetails.Password}</td>
                      <td>{formDetails.Active}</td>
                    </tr>
            })
        }
          </tbody>

        </table>
        {console.log(fetchingTheData)}
    </>

  )
}
const mapStateToProps=(state)=>{
  return{
    // loginDetails:state.login.users,
    fetchingTheData:state.fetchData.users
  }
}
// export default Dashboard
export default connect(mapStateToProps,null)(Dashboard)