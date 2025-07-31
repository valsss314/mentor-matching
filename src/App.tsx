import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HackerRegister from "./pages/HackerRegister";
import MentorRegister from "./pages/MentorRegister";
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css"
import './index.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/HackerRegister" element={<HackerRegister />} />
        <Route path="/MentorRegister" element={<MentorRegister />} />
      </Routes>
  );
}

export default App
