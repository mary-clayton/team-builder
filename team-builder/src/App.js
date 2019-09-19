import React, { useState } from 'react';
import './App.css';

import TeamMembers from "./components/TeamMember.js";
import TeamNav from "./components/TeamNav"
import Form from "./components/Form.js";
import users from "./components/data"

function App() {


  const [teamMembers, setTeamMembers] = useState (users)

  const addNewTeamMember = team => {
    const newTeamMember = {
      name: team.name,
      email: team.email,
      role: team.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };



  return (
    <div className="App">
      <TeamNav />
      <TeamMembers teamMembers = {teamMembers} />
      <Form addNewTeamMember = {addNewTeamMember}/>
    </div>
  );
}

export default App;
