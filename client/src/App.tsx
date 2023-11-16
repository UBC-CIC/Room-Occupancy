import React from "react";
import { Navbar } from "./components/common/navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/about/About";
import { Learn } from "./pages/Learn";
import { Error } from "./pages/Error";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "./pages/analytics/Analytics";
import { AdminDashboard } from "./pages/admin/adminDashboard";

function App() {
  const NO_NAVBAR_LIST = ["/admin_dashboard"];

  const showNav = !NO_NAVBAR_LIST.includes(window.location.pathname);
  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
