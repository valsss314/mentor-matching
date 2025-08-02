import React from 'react'
import RegistrationText from '../components/RegistrationText'
import logo from '../assets/logo-black.png'
import {Link} from "react-router"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import type { MentorData } from "../types/types.ts"
import {useState} from "react"

const MentorRegister = () => {

  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const defaultData: MentorData = { 
        email: email, 
        name: name,
        skills: skills,
        role: "Mentor",
        queue: [],
      };
      await setDoc(doc(db, "users", userCred.user.uid), defaultData);
      navigate("/Login");
    }
    catch (err) {
      const firebaseError = err as { message?: string; code?: string };
      if (firebaseError.code === "auth/email-already-in-use") {
        alert("That email is already registered. Please log in instead.");
      } else {
        alert(firebaseError.message || "An unexpected error occurred.");
      }
    }
  }

  return (
    <>
    <nav className="flex justify-between items-center">
      <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
    </nav>
    <section>
      <h1 className="text-3xl mb-5">Mentor Sign Up</h1>
      <RegistrationText name="Name" value={name} onChange={setName}/>
      <RegistrationText name="Technical Skills (separate by ,)" value={skills} onChange={setSkills}/>
      <RegistrationText name="Email" value={email} onChange={setEmail}/>
      <RegistrationText name="Password" value={password} onChange={setPassword} type="password"/>
    </section>
    <button onClick={handleSignUp} className="mt-3 brightness-100 bg-gradient-to-r from-cyan-500 to-pink-500 brightness-125 rounded px-3 py-3 hover:brightness-100 cursor-pointer text-xl">Sign Up</button>
    <h1 className="text-h3 items-center mt-5 underline"><Link to="/Login">Already have an account?</Link></h1> 
    </>
  )
}

export default MentorRegister