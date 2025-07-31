import React from 'react'
import {Link} from 'react-router'
//import "../css/Dashboard.css"
import logo from "../assets/logo-black.png"
import '../globals.css'

const Dashboard = () => {
  return (
    <>
    <nav className="flex justify-between items-center">
      <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
      <ul className="inline-flex gap-[50px]">
        <li><Link to="/AboutUs"><button className="cursor-pointer text-xl">About Us</button></Link></li>
        <li><Link to="/Login"><button className="cursor-pointer text-xl">Sign In</button></Link></li>
        <li><Link to="/Register"><button className="text-xl bg-gray-800 text-white rounded px-3 hover:bg-gray-500 cursor-pointer font-bold">Register</button></Link></li>
      </ul>
    </nav>
    <section className="max-w-none">
      <h1 className="text-6xl text-left mb-2 font-extrabold mt-15">Mentor Matching</h1>
      <h2 className="text-2xl text-left mb-5">Bring your ideas to life with the help of our amazing mentors!</h2>
      <Link to="/Register"><button className="brightness-100 flex justify-start bg-gradient-to-r from-cyan-500 to-pink-500 brightness-125 rounded px-5 py-5 hover:brightness-100 cursor-pointer text-2xl">Get Started</button></Link>
    </section>
    </>
  )
}

export default Dashboard