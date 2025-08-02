import React from 'react'
import { useLocation } from "react-router-dom";
import type { HackerData } from "../types/types";

const HackerScreen = () => {
  const location = useLocation();
  const user = location.state?.user as HackerData;
  
  return (
    <>
      <h1>Welcome, {user.name}!</h1>
    </>
  )
}

export default HackerScreen