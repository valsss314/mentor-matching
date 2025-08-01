import React from 'react'
import '../globals.css'
import {Link} from "react-router-dom"
import RegistrationText from '../components/RegistrationText'
import logo from '../assets/logo-black.png'
import LoginText from '../components/LoginText'

const Login = () => {
  return (
    <>
    <nav className="flex justify-between items-center">
      <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
    </nav>
    <section>
      <h1 className="text-3xl mt-5 mb-5">Sign In</h1>
      <LoginText name={"Email"}/>
      <LoginText name={"Password"}/>
      <div className="underline">Forgot Password?</div>
    </section>
    <button className="mt-3 brightness-100 bg-gradient-to-r from-cyan-500 to-pink-500 brightness-125 rounded px-3 py-3 hover:brightness-100 cursor-pointer text-xl">Sign In</button>
    <h1 className="text-h3 items-center mt-5">Need an account?</h1> 
    <Link to="/Register"><div className="underline">Register here.</div></Link>
    </>
  )
}

export default Login