import React from 'react'
import { useLocation } from "react-router-dom";
import type { MentorData, HackerData, HackerWithID } from "../types/types";
import { Link } from "react-router-dom"
import logo from "../assets/logo-black.png"
import '../globals.css'
import { collection, getDocs, query, where, onSnapshot, updateDoc, arrayUnion, doc, arrayRemove } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState, useEffect } from "react"

const MentorScreen = () => {
  type MentorWithID = MentorData & { id: string };
  const location = useLocation();
  const user = location.state?.user as MentorWithID;
  const [hackers, setHackers] = useState<HackerWithID[]>([]);

  const removeTop = async () => {
    if (hackers.length > 0) {
      const topHacker = hackers[0];
      setHackers(hackers.slice(1));
      const mentorRef = doc(db, "users", user.id);
      await updateDoc(mentorRef, {
        queue: arrayRemove(topHacker.id)
      });
    }
  };

  useEffect(() => {
    const unsubscribes: (() => void)[] = [];

    if (user.queue && user.queue.length > 0){
      user.queue.forEach((id: string) => {
        const hackerRef = doc(db, "users", id);
        const unsubscribe = onSnapshot(hackerRef, (docSnap) => {
          if (docSnap.exists()) {
            setHackers(prev => {
              const updated = prev.filter(h => (h.id !== id));
              return [...updated, { id: id, ...(docSnap.data() as HackerData) }];
            });
          }
        });
        unsubscribes.push(unsubscribe);
      });
    }

    return () => {
      unsubscribes.forEach(unsub => unsub());
    };
  }, [user.queue]);

  return (
    <>
      <nav className="flex justify-between items-center">
        <Link to="/"><img className="top-0 -left-50 h-30" src={logo} alt="Technica logo"></img></Link> 
      </nav>
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>

      <section className="mt-4">
        {hackers.length === 0 ? (
          <p>No hackers.</p>
        ) : (
        <div className="flex flex-col items-center justify-center">
        {hackers.map((hacker, index) => (
          <li className="mb-5 p-4 border rounded shadow list-none">
            <h3 className="text-lg font-bold">{hacker.name}</h3>
            <p>{hacker.email}</p>
            <p>Table number: {hacker.tableNumber}</p>
            {(index === 0) && 
              <div>
                <button className="cursor-pointer mt-3 mr-3 brightness-100 bg-green-500 rounded px-2 py-2 hover:brightness-100">Ready To Help</button>
                <button onClick={removeTop} className="cursor-pointer mt-3 brightness-100 bg-red-500 rounded px-2 py-2 hover:brightness-100">Remove</button>
              </div>
            }
          </li>
        ))}
        </div>
        )}
      </section>
    </>
  )
}

export default MentorScreen