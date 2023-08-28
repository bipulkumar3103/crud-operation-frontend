import React, { useEffect, useState } from 'react'
import { allUser,deleteUser } from '../service/api.js'
import {Link} from 'react-router-dom';

function AllUser() {
    
  const [users,setUsers]=useState([])
  
    useEffect(()=>{
      getAllUser()
    },[])


    const getAllUser= async ()=>{
      let response=await allUser();
      // console.log(response.data)
      setUsers(response.data)
    }

    const deleteUserDetails=async(id)=>{
      await deleteUser(id)
      getAllUser()

    }

  return (
    <>
       <div className='container-fluid my-4'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>All User</h1> 
        </div>
      </div>
      <div className='row '>
          <div className='col-md-11 mx-auto table-responsive-md'>
           <table className="table table-striped">
                <thead>
                  <tr className='table-dark'>
                    <th scope="col ">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col " className='text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((users,index)=>(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{users.name}</td>
                    <td>{users.userName}</td>
                    <td>{users.email}</td>
                    <td>{users.phoneNumber}</td>
                    <td>
                        <div className='col-12 mx-auto d-flex justify-content-center align-items-center' >
                        <Link className='btn btn-outline-primary   mx-2'  to={`/editUser/${users._id}`} >Edit</Link>
                        <button className='btn btn-outline-danger  mx-2' onClick={()=>{deleteUserDetails(users._id)}}>Delete</button>
                        </div>
                    </td>
                  </tr>
                    ))
                  }
                  {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr> */}
                 
                </tbody>
              </table> 

          </div>
        </div>
      </div>
    </>
  )
}

export default AllUser