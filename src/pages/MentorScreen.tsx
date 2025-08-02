import React from 'react'
import { useLocation } from "react-router-dom";
import type { MentorData } from "../types/types";

const MentorScreen = () => {
  const location = useLocation();
  const user = location.state?.user as MentorData;

  return (
    <>
      <h1>Welcome, {user.name}!</h1>
    </>
  )
}

export default MentorScreen