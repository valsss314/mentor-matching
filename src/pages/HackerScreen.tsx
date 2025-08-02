import React from 'react'
import { useLocation } from "react-router-dom";
import type { MentorData } from "../types/types";
import { Link } from "react-router-dom"
import logo from "../assets/logo-black.png"
import '../globals.css'
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState, useEffect } from "react"

const HackerScreen = () => {
  const location = useLocation();
  const user = location.state?.user as MentorData;
  const [mentors, setMentors] = useState<MentorData[]>([]);
  
  useEffect(() => {
    const q = query(
      collection(db, "users"),
      where("role", "==", "Mentor")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const mentorList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as MentorData)
      }));
      setMentors(mentorList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center">
        <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
      </nav>
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <section className="mt-4">
        {mentors.length === 0 ? (
          <p>No mentors found.</p>
        ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {mentors.map((mentor) => (
          <li className="p-4 border rounded shadow list-none">
            <h3 className="text-lg font-bold">Mentor {mentor.name}</h3>
            <p>{mentor.email}</p>
            <p className="underline mt-3">Skills</p>
            {(mentor.skills).split(",").map ((skill) => (
              <p>{skill}</p>
            ))}
            <button className="cursor-pointer mt-5 brightness-100 bg-gradient-to-r from-cyan-500 to-pink-500 brightness-125 rounded px-2 py-2 hover:brightness-100">Add to Queue</button>
          </li>
        ))}
        </div>
        )}
      </section>
    </>
  )
}

export default HackerScreen