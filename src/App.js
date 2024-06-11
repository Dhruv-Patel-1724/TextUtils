
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //document.title = "TextUtils - Dark mode"//used to heder name change to click dark mode switch
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // },1500); // it is used to header is blinking 
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* /users --> Component 1
            /users/home --> Component 1 */}
            {/* <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={}/>   */}
            <TextForm showAlert={showAlert} heding="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router>  */}
    </> 

  );
}

export default App;
