import React from 'react'
import '../globals.css'
import {Link} from "react-router-dom"
import RegistrationText from '../components/RegistrationText'
import logo from '../assets/logo-black.png'
import LoginText from '../components/LoginText'
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router";
import type {  } from "../types/types.ts"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
  const handleAuth = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error: any ) {
      alert(error.message);
    }
  };

  return (
    <>
    <nav className="flex justify-between items-center">
      <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
    </nav>
    <section>
      <h1 className="text-3xl mt-5 mb-5">Sign In</h1>
      <LoginText name="Email" value={email} onChange={setEmail}/>
      <LoginText name="Password" value={password} onChange={setPassword} type="password"/>
    </section>
    <button className="mt-3 brightness-100 bg-gradient-to-r from-cyan-500 to-pink-500 brightness-125 rounded px-3 py-3 hover:brightness-100 cursor-pointer text-xl" onClick={handleAuth}>Sign In</button>
    <div className="underline mt-5">Forgot Password?</div>
    <h1 className="text-h3 items-center mt-3 underline"><Link to="/Register">Need an account?</Link></h1> 
    </>
  )
}

export default Login