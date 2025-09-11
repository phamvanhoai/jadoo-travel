import React from 'react'

const Nav = () => {
  return (
    <>
      <nav>
        <a href="/destinations">Destinations</a>
        <a href="/hotels">Hotels</a>
        <a href="/flights">Flights</a>
        <a href="/bookings">Bookings</a>
        <a href="/login">Login</a>
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