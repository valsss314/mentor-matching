import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router";
import logo from "../assets/logo-black.png"
import LoginText from "../components/LoginText"
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Email sent! (You may need to check spam/junk)");
      setSent(true);
      navigate("/Login")
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center">
        <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
      </nav>
      <section>
        <h1 className="text-3xl mb-5">Reset Password</h1>
        <LoginText name="Email" value={email} onChange={setEmail}/>
      </section>
      <button className="mt-3 brightness-100 bg-gradient-to-r from-cyan-500 to-pink-500 brightness-125 rounded px-3 py-3 hover:brightness-100 cursor-pointer text-xl" onClick={handleReset}>Send Reset Email</button>
    </>
  )
}

export default ForgotPassword