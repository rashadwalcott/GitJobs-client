import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage'
import JobContainer from './JobContainer'

function App() {
  return (
    <div className="App">
    <LandingPage />
    {/* ternary for when they are logged in this renders the job container */}
    <JobContainer />
    </div>
  );
}

export default App;
