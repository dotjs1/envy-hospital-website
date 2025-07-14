import React from 'react';
import logo from './logo/2f3879a390a441a08a14b40cceb5e761-free.png'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to='/'><img src={logo} alt='Envy Hospitals alt' style={{height:'60px'}}></img><strong>Envy Hospitals</strong></Link>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/aboutus'>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">Find Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/department'>Our Department</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>
          <form  className=" form_buttons gap-3 px-4" role="search">
            <button className="btn btn-success rounded" type="button">Signup</button>
            <button className="btn btn-outline-primary rounded" type="button">Login</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
