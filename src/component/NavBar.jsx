import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'


function NavBar() {
 


  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <Link className="navbar-brand" to="/">Bipul</Link>
    <button className="btn " id='btn-myclass' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  
      <span className="navbar-toggler-icon"></span>
</button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link" aria-current="page" to="/allUser">All User</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link" to="/addUser">Add User</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>



{/* offcanvas */}

<div className=" offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header text-white bg-dark" style={{borderBottom:'3px solid white'}}>
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className='mx-4'>
    <ul className="navbar-nav mb-2 mb-lg-0" >
        <li className="nav-item my-2">
          <NavLink className="my-nav nav-link" id='my-nav'  to="/" >Home</NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink className="my-nav nav-link" id='my-nav'  to="/allUser" >All User</NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink className="my-nav nav-link" id='my-nav' to="/addUser">Add User</NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink className="my-nav nav-link" id='my-nav' to="/about">About Us</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</div>

  

    </>
  )
}

export default NavBar