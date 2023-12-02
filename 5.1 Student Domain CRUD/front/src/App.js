// import logo from './logo.svg';
import React from "react";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/pages/Home";
import Student from "./layout/pages/Students";
import Login from "./layout/admin/Login";
import EditDomain from "./layout/pages/EditDomain";
import AddDomain from "./layout/pages/AddDomain";
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/editDomain/:id" element={<EditDomain />} />
            <Route path="/students/:id" element={<Student />} />
            <Route path="/addDomain" element={<AddDomain/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
