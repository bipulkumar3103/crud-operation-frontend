import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
<div className="my-footer container-fluid " >
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><NavLink to ='/' className="nav-link px-2 text-muted">Home</NavLink></li>
      <li className="nav-item"><NavLink to ='/allUser' className="nav-link px-2 text-muted">All User</NavLink></li>
      <li className="nav-item"><NavLink to ='/addUser' className="nav-link px-2 text-muted">Add User</NavLink></li>
      <li className="nav-item"><NavLink to='/about' className="nav-link px-2 text-muted">About Us</NavLink></li>
    </ul>
  </footer>
</div>
    </>
  )
}

export default Footer