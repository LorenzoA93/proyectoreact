import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './style.css';
const NavBar = () => {
  return (


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={'/'} >Ezeiza Commerce</Link>
  <div id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={'/category/electronics'} >Electronica</Link>
      </li>
      <li className="nav-item">
        <Link to={'/category/jewelery'}>Joyeria</Link>
      </li>
    </ul>
  </div>
  <CartWidget/>
</nav>
  )
}

export default NavBar