import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



export default function Navbar(props) { // This is mendatory props should pass as a parameter


  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
  <div className="container-fluid">
  <a className="navbar-brand" href="#">{props.name}</a>  {/* This is how props is defined in component */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
        </li> 
        {/* <li className="nav-item">
          <a className="nav-link"  href="/about">{props.aboutus}</a>
        </li> */}
        
   
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch mx-2">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==='dark'?'white':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'Dark':'Light'} Mode</label>
      </div>
    </div>
  </div>
</nav>


    
    </>
  )
}

// Navbar.defaultProps={
//   name:"Default",
//   aboutus:"Default about"

// }

Navbar.propTypes={
  name: PropTypes.string,
  aboutus: PropTypes.string
  }