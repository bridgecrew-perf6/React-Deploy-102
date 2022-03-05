import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
// import UpdatingReducer from '../Reducer/Updatingreducer';
function Popupform({Name,Email,Id}) { 

const [update,setUpdate]=useState({
  updateName:Name,
  updateEmail:Email
})

const submitData=(e)=>{
  e.preventDefault();
    console.log(Name)
    // setUpdate({updateName:Name,updateEmail:Email})
    console.log(update)
}

const changingHandler=(e)=>{

  const{name,value}=e.target

  setUpdate({...update,[name]:value})
  console.log(update)
  
}

  return (
 <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"onClick={submitData}>
      Edit
      </button>
<div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">UPDATE FORM</h5>
        <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div>         
           <label className='d-block fw-bold'>Name</label>
          <input type='text' name='updateName' value={update.updateName} onChange={changingHandler}/>
          </div>
          <div>         
           <label  className='d-block fw-bold'>Email</label>
          <input type='email' name='updateEmail' value={update.updateEmail} onChange={changingHandler}/>
          </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Save changes</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
</>

  )
}
const mapStateToProps=(state)=>{
  return{
    // loginDetails:state.login.users,
    fetchingTheData:state.fetchData.users
  }
}
// export default Popupform
export default connect(mapStateToProps,null)(Popupform)