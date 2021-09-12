import jwtDecode from "jwt-decode";
import React, {useEffect} from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

function Navbar(props) {
  let location = useLocation()
  let user = ""
  if(localStorage.getItem('token')){
    user = jwtDecode(localStorage.getItem('token')).username
  }

  useEffect(() => {
      
  }, [location])

  const history = useHistory()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    history.push("/login")
    props.showAlert("Thanks for using inotebook :)", "success")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>

        {/* toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* nav items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ?"active":""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ?"active":""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<div className="d-flex">
            <Link className="btn btn-primary btn-sm me-2" to='/login'>
              Login
            </Link>
            <Link className="btn btn-primary btn-sm me-2" to='/signup'>
              SignUp
            </Link>
          </div>:
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link me-3" to="/user">Hello, {user}</Link>
            </li>
          <li className="nav-item p-0 mb-0">
          <button className="btn btn-primary me-2" onClick={handleLogout}>Logout</button>
          </li>
          </ul>}
        </div>


      </div>
    </nav>
  );
}

export default Navbar;
