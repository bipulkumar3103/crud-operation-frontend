import React, { useState,useEffect } from 'react'
import { editUser,getUser } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'



const defaultUser={
  name:'',
  userName:'',
  email:'',
  phoneNumber:''
}

function EditUser() {
const [user,setUser]=useState(defaultUser)

const navigate=useNavigate();  
useEffect(()=>{
    loadUserDetails();
    //eslint-disable-next-line
  },[])

const {id}=useParams();
const loadUserDetails=async()=>{
    const response=await getUser(id)
    console.log(response.data);
    setUser(response.data)
    console.log(user)
}   


const onSubmitHandler=(e)=>{
  e.preventDefault()
}

const onValueChange=(e)=>{
  // console.log(e.target.value)
  setUser({...user,[e.target.name]:e.target.value});
}

const editUserDetails= async ()=>{
  await editUser(user,id)
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
    <input type="text" onChange={(e)=>onValueChange(e)} value={user.name} name='name' className="form-control" id="exampleName"  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="examplUserName" className="form-label">Username</label>
    <input type="text" onChange={(e)=>onValueChange(e)} name='userName' value={user.userName} className="form-control" id="examplUserName"  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleEmail" className="form-label">Email</label>
    <input type="email" onChange={(e)=>onValueChange(e)} name='email' value={user.email} className="form-control" id="exampleEmail"  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="examplePhone" className="form-label">Phone No.</label>
    <input type="number" onChange={(e)=>onValueChange(e)} name='phoneNumber' value={user.phoneNumber} className="form-control" id="examplePhone" />
  </div>
  <div className="mb-3 ">
  <button type="submit" onClick={editUserDetails} className="btn btn-outline-dark col-12">Update</button>
  </div>
</form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default EditUser