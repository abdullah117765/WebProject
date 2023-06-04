import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,   
  Switch,  //npm install react-router-dom
} from "react-router-dom"; 

import React from 'react';
// import TeamLeadPage from "./pages/teamLeadPanel/TeamLeadPage.jsx"
// import Home from "./pages/home/Home.jsx"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import Practice from './Practice.jsx';
import RequirementForm from "./pages/requirementPanel/RequirementForm.jsx"
import ManageRequirements from './pages/managerequirements/ManageRequirements';
import EmailForm from './pages/email/Email.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Sidebar/>
      <Switch>
        {/* <Route path="/" element={<TeamLeadPage/>}/> */}
      

        <Route path="/p" element={<Practice/>}/>
        <Route path="/" element={<RequirementForm />}/>
        <Route path="/table" element={<ManageRequirements  />}/>
        <Route path="/email" element={<EmailForm />}/>
        </Switch>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// working of context api consumer jo 
// ha wo context file ke pass jae ga or
// woh provider app ke pass