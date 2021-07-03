// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Dashboard from "./components/Dashboard";
import Xcards from "./components/Xcards";
import Graphs from "./components/Graphs";
import MainPaper from "./components/MainPaper";

function App() {
  return (
    <div style={{ backgroundColor: "#F3F4F8" }}>
      {/* <h3 style={{border: '1px solid'}}>My project</h3> */}
      <Dashboard />
      <Xcards />
      <MainPaper />
      {/* <Graphs /> */}
    </div>
  );
}

export default App;
