import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,     //npm install react-router-dom
} from "react-router-dom"; 
import React from 'react';
// import TeamLeadPage from "./pages/teamLeadPanel/TeamLeadPage.jsx"
// import Home from "./pages/home/Home.jsx"
import Sidebar from "./pages/home/Sidebar.jsx"
import Practice from './Practice.jsx';
import RequirementForm from "./pages/requirementPanel/RequirementForm.jsx"
import ManageRequirements from './pages/managerequirements/ManageRequirements';
import EmailPage from './pages/email/Email.jsx'
import Navbar from './components/navbar/Navbar';
 import MemberPage from "./pages/membermanage/MemberPage.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
    <Navbar/> 
    <ToastContainer />
    <div className="flex">
     <Sidebar/>
     <div className="flex-1">
      <Routes>   
        {/* <Route path="/" element={<TeamLeadPage/>}/> */}
      

        <Route path="/p" element={<Practice/>}/>
        <Route path="/" element={<RequirementForm />}/>
        <Route path="/table" element={<ManageRequirements  />}/>
        <Route path="/email" element={<EmailPage />}/>
        <Route path="/team" element={<MemberPage/>}/>
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// working of context api consumer jo 
// ha wo context file ke pass jae ga or
// woh provider app ke pass