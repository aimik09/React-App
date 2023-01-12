import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
  //import About from './Components/About';
  import Navbar from './Components/Navbar';
  import TextForm from './Components/TextForm';
  function App() {
    const [mode, setMode] = useState('light'); //dark mode is enable or not\
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
    }



    const toggleMode =() =>{
      if (mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#1c1e5a';
        showAlert("Dark Mode Has Been Enabled", "Success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='White';
        showAlert("Light Mode Has Been Enabled", "Success");
      }
    }

    return (
      <>
  <Navbar title="Ammar" about="About Info" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">

  <TextForm heading = "Enter your text here:-" mode={mode}/>

  </div>
  </>

    );
  }

export default App;
