import {Link} from 'react-router'
import logo from "../assets/logo-black.png"
import '../globals.css'
import mentorimg from "../assets/teacherimg.png"
import hackerimg from "../assets/studentimg.png"

const Register = () => {
  return (
    <>
    <nav className="flex justify-between items-center">
      <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
    </nav>
    <h1 className="-mt-10 text-4xl font-bold">Who Are You?</h1>
    <section className="mt-5 flex">
      <div className="w-1/2 h-100 bg-cyan-200">
        <h1 className="mt-10 text-3xl">Hacker</h1>
        <Link to="/HackerRegister">
          <button className="cursor-pointer items-center object-contain">
            <img src={hackerimg} alt="image of a hacker" className="max-w-xs scale-80"></img>
          </button>
        </Link>
      </div>
      <div className="w-1/2 h-100 bg-pink-200">
        <h1 className="mt-10 text-3xl">Mentor</h1>
        <Link to="/MentorRegister">
          <button className="cursor-pointer items-center object-contain">
            <img src={mentorimg} alt="image of a mentor" className="max-w-xs scale-75"></img>
          </button>
        </Link>
      </div>
    </section>
    <h1 className="text-h3 items-center mt-5">Already have an account?</h1> 
    <Link to="/Login"><div className="underline">Sign in.</div></Link>
    </>
  )
}

export default Register