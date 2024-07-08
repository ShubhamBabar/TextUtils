import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
import { useState } from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import {BrowserRouter,Switch,Route} from 'react-router-dom'


function App() {
const [darkMode, setDarkMode] = useState('dark');
const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}
const toggleMode=()=>{
  if(darkMode==='dark'){
    setDarkMode('warning');
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    document.title='TextUtil - Dark Mode';
    showAlert('Dark mode has been enabled.','success');
  }else{
    setDarkMode('dark')
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    document.title='TextUtil - Light Mode';
    showAlert('Light mode has been enabled.','success');
  }
}


  return (
    <>   
<Navbar name="TextUtil" aboutus="About Us" home="Home" mode={darkMode} toggleMode={toggleMode}/> 
{/* The Navbar is the function based component. and this is how we use that component  ans title is the props passed to the Navbar component*/}
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className='container'>
<TextForm heading="Enter text here to analyze" showAlert={showAlert} mode='dark'/>
{/*  */}
{/* <BrowserRouter>
  
  <Routes>
      <Route exact path='/' element={<TextForm heading="Enter text here to analyze" showAlert={showAlert} mode='dark'/> }/>
      <Route exact path='/about' element={<About/>}/>
   

  </Routes>

</BrowserRouter> */}

</div>


    </>
  );
}

export default App;
