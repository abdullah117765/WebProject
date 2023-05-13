import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,     //npm install react-router-dom
} from "react-router-dom"; 

import React from 'react';

import TeamLeadPage from "./pages/teamLeadPanel/TeamLeadPage.jsx"
import Home from "./pages/home/Home.jsx"

function App() {
  return (
    <BrowserRouter>
    <Routes>  
     <Route path="/" element={<TeamLeadPage/>}/> 
     <Route path="/home" element={<Home/>}/> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
