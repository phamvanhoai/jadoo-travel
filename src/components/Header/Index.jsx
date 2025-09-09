import React from 'react'
import "./Header.css";
import Nav from './Nav';
import Banner from './Banner';

const Index = () => {
  return (
    <>
    <header className="hero">
        <Nav/>
        <Banner/>
    </header>
    </>
  )
}

export default Index
