// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/LoginForm'; // adjust based on actual location
import Register from './components/RegisterForm'; // adjust based on actual location
import Dashboard from './components/Dashboard'; // adjust based on actual location

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
