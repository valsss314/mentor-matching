import {Link} from "react-router-dom"
import logo from "../assets/logo-black.png"
import RegistrationText from '../components/RegistrationText'
import '../globals.css'
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import {useNavigate} from "react-router-dom"
import type { HackerData } from "../types/types.ts"
import { createUserWithEmailAndPassword } from "firebase/auth";

const HackerRegister = () => {

  const [name, setName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const defaultData: HackerData = { 
        email: email, 
        name: name,
        tableNumber: tableNumber,
        role: "Hacker",
      };
      await setDoc(doc(db, "users", userCred.user.uid), defaultData);
      navigate("/Login"); 
    } catch (err) {
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
      <h1 className="text-3xl mb-5">Hacker Sign Up</h1>
      <RegistrationText name="Name" value={name} onChange={setName}/>
      <RegistrationText name="Table #" value={tableNumber} onChange={setTableNumber}/>
      <RegistrationText name="Email" value={email} onChange={setEmail}/>
      <RegistrationText name="Password" value={password} onChange={setPassword} type="password" />
    </section>
    <button onClick={handleRegister} className="mt-3 brightness-100 bg-gradient-to-r from-cyan-500 to-pink-500 brightness-125 rounded px-3 py-3 hover:brightness-100 cursor-pointer text-xl">Sign Up</button>
    <h1 className="text-h3 items-center mt-5 underline"><Link to="/Login">Already have an account?</Link></h1> 
    </>
  )
}

export default HackerRegister