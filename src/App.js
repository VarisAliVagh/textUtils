import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert = (msg,res)=>{
    setAlert({
      msg:msg,
      res:res
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark mode activated','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode activated','success')
    }
  }
  return (
    <Router>
      <Navbar logo="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <br />

      <Routes>
          <Route exact path="/" element={<TextForm title="" mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About />} />
      </Routes>


    </Router>
  
  );  
}

export default App;
