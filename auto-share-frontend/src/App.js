import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Booking from './pages/Booking';  
import Review from './pages/Review';   
import Payment from './pages/Payment';  
//import UserDropdown from "./components/UserDropdown";

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/review/:id" element={<Review />} />
          <Route path="/payment/:id" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;