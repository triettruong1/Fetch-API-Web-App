import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Background from './Components/Background';
import Legend from './Components/Legend';
import Demo from './Components/Demo';

const App:React.FC = () => {
  return (
    <div className="App">
      <Background/>
      <Nav/>
      <div className="container">
        <div className="content">
          <Legend/>
          <Demo/>
        </div>
      </div>
    </div>
  );
}

export default App;
