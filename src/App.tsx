import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HackerRegister from "./pages/HackerRegister";
import MentorRegister from "./pages/MentorRegister";
import { Route, Routes } from "react-router"
import ForgotPassword from "./pages/ForgotPassword";
import HackerScreen from "./pages/HackerScreen";
import MentorScreen from "./pages/MentorScreen";
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
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/HackerScreen" element={<HackerScreen />} />
        <Route path="/MentorScreen" element={<MentorScreen />} />
      </Routes>
  );
}

export default App
