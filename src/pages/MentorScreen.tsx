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
      console.log(hackers.slice(1));
      setHackers(hackers.slice(1));
      console.log(hackers);
      const mentorRef = doc(db, "users", user.id);
      await updateDoc(mentorRef, {
        queue: arrayRemove(topHacker.id)
      });
    }
  };

  const handleReadyToHelp = async (hackerid: string) => {
    const hackerRef = doc(db, "users", hackerid);
    await updateDoc(hackerRef, {
      status: "ready",
      mentor: user.name
    });
    alert("Hacker has been alerted, please proceed to their table.")
  };

  const [queue, setQueue] = useState<string[]>([]);

useEffect(() => {
  const mentorRef = doc(db, "users", user.id);
  const unsubscribe = onSnapshot(mentorRef, (docSnap) => {
    if (docSnap.exists()) {
      const updatedQueue = docSnap.data().queue || [];
      setQueue(updatedQueue);
    }
  });
  return () => unsubscribe();
}, [user.id]);

useEffect(() => {
  const unsubscribes: (() => void)[] = [];
  const hackerMap: Map<string, HackerWithID> = new Map();

  if (queue.length > 0) {
    queue.forEach((id: string) => {
      const hackerRef = doc(db, "users", id);
      const unsubscribe = onSnapshot(hackerRef, (docSnap) => {
        if (docSnap.exists()) {
          hackerMap.set(id, { id, ...(docSnap.data() as HackerData) });
          const orderedHackers: HackerWithID[] = queue
            .map(hid => hackerMap.get(hid))
            .filter((h): h is HackerWithID => h !== undefined);
          setHackers(orderedHackers);
        }
      });
      unsubscribes.push(unsubscribe);
    });
  } else {
    setHackers([]);
  }

  return () => {
    unsubscribes.forEach(unsub => unsub());
  };
}, [queue]);

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
                <button onClick={() => handleReadyToHelp(hacker.id)} className="cursor-pointer mt-3 mr-3 brightness-100 bg-green-500 rounded px-2 py-2 hover:brightness-100">Ready To Help</button>
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