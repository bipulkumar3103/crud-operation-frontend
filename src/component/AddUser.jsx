import React, { useState } from 'react'
import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'



const defaultUser={
  name:'',
  userName:'',
  email:'',
  phoneNumber:''
}

function AddUser() {

const navigate=useNavigate();  
const [user,setUser]=useState(defaultUser)

const onSubmitHandler=(e)=>{
  e.preventDefault()
}

const onValueChange=(e)=>{
  // console.log(e.target.value)
  setUser({...user,[e.target.name]:e.target.value});
}

const addUserDetails= async ()=>{
  await addUser(user)
  navigate('/allUser')
}


  return (
    <>
    <div className='container my-4'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Add User</h1> 
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 col-10 mx-auto my-2'>
        <form onSubmit={onSubmitHandler}>
  <div className="mb-3">
    <label htmlFor="exampleName" className="form-label">Name</label>
    <input type="text" onChange={(e)=>onValueChange(e)} name='name' className="form-control" id="exampleName"  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="examplUserName" className="form-label">Username</label>
    <input type="text" onChange={(e)=>onValueChange(e)} name='userName' className="form-control" id="examplUserName"  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleEmail" className="form-label">Email</label>
    <input type="email" onChange={(e)=>onValueChange(e)} name='email' className="form-control" id="exampleEmail"  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="examplePhone" className="form-label">Phone No.</label>
    <input type="number" onChange={(e)=>onValueChange(e)} name='phoneNumber' className="form-control" id="examplePhone" />
  </div>
  <div className="mb-3 ">
  <button type="submit" onClick={addUserDetails} className="btn btn-outline-dark col-12">Submit</button>
  </div>
</form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default AddUser