import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function AllformData({fetchingTheData}) {
  return (
    <div>
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
            {fetchingTheData.map((formDetails)=>{
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
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
      loginDetails:state.login.users,
      fetchingTheData:state.fetchData.users
    }
  }

// export default AllformData
export default connect(mapStateToProps,null)(AllformData)