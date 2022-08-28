import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Background from './Components/Background';
import Legend from './Components/Legend';
import Demo from './Components/Demo';

function App() {
  return (
    <div className="App">
      <Background/>
      <Nav/>
      <div className="container">
        <div className="content grid">
          <Legend/>
          <Demo/>
        </div>
      </div>
    </div>
  );
}

export default App;
