import React from 'react'

const Nav = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Jad<span>oo</span></div>
        <ul className="nav-links">
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <li>Login</li>
          <li>
            <button className="btn-outline">Sign up</button>
          </li>
          <li>EN ⌄</li>
        </ul>
      </nav>

    </div>
  )
}

export default Nav
