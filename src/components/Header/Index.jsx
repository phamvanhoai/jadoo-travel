import React from 'react'
import "./Header.css";
import Nav from './Nav';
import Banner from './Banner';

const Index = () => {
  return (
    <>
      {/* <!-- Background Glow --> */}
      <img src="/assets/Ellipse 8.png" alt="BG" class="bg-effect" />

      {/* <!-- Header --> */}
      <header>
        {/* <!-- <div class="logo">Jad<span>oo</span></div> --> */}
        <div class="logo"><img src="/assets/Logo.png" alt="Jadoo" /></div>
        <Nav/>
      </header>
        <Banner/>
    </>
  )
}

export default Index