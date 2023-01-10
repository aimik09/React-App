import React, { useState } from 'react';
import './App.css';
  //import About from './Components/About';
  import Navbar from './Components/Navbar';
  import TextForm from './Components/TextForm';
  function App() {
    const [mode, setMode] = useState('light'); //dark mode is enable or not

    const toggleMode =() =>{
      if (mode==='light'){
        setMode('dark');
      }
      else{
        setMode('light');
      }
    }

    return (
      <>
  <Navbar title="Ammar2" about=" About Info" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">

  <TextForm heading = "Enter your text here:-"/>

  </div>
  </>

    );
  }

export default App;
