import React from 'react'

const Nav = () => {
  return (
    <>
      <nav>
        <a href="#">Destinations</a>
        <a href="#">Hotels</a>
        <a href="#">Flights</a>
        <a href="#">Bookings</a>
        <a href="#">Login</a>
        <button class="signup-btn">Sign up</button>
        <select class="lang-select">
          <option>EN</option>
          <option>VN</option>
        </select>
      </nav>
    </>
  )
}

export default Nav