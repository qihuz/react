
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';




function App() {
  const [mode, setMode] = useState('light');
  const togglemode =() =>{
 
   if(mode === 'light')
   {
  setMode('dark');
  //document.body.style.backgroundColor = "black";

  }
else

    {
    setMode('light');
    //document.body.style.background.color = "white";
}
  }
  

return (
<>
<Navbar title="TextUtiles " mode={mode} togglemode={togglemode} />

<div className="container my-3">
<Textform heading= "Enter the text to analyze below"/>
 {/*<About/>*/}
 </div>
</>
  );
  }


export default App;
