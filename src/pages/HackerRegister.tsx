import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/logo-black.png"
import RegistrationText from '../components/RegistrationText'
import '../globals.css'

const HackerRegister = () => {
  return (
    <>
    <nav className="flex justify-between items-center">
      <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
    </nav>
    <section>
      <h1 className="text-3xl mt-5 mb-5">Hacker Sign Up</h1>
      <RegistrationText name={"Name"}/>
      <RegistrationText name={"Table #"}/>
      <RegistrationText name={"Email"}/>
      <RegistrationText name={"Password"}/>
    </section>
    <button className="mt-3 brightness-100 bg-gradient-to-r from-cyan-500 to-pink-500 brightness-125 rounded px-3 py-3 hover:brightness-100 cursor-pointer text-xl">Sign Up</button>
    <h1 className="text-h3 items-center mt-5">Already have an account?</h1> 
    <Link to="/Login"><div className="underline">Sign in.</div></Link>
    </>
  )
}

export default HackerRegister