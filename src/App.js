
import './App.css';
import Navbar from './compunants/Navbar';
import About from './compunants/About';
import Textfrom from './compunants/Textfrom';
import React, { useState } from 'react'



//jsx..>
// add bootstrap 
// props...>   > costom   computatones.
// 
function App() {
  const [Mode, setMode] = useState('light');//Whether dark mode enabled or not

        const toggleMode =()=>{
          if(Mode=== 'light'){
            setMode('dark');
            document.body.style.backgroundColor = "grey";
          }else{
            setMode('light');
            document.body.style.backgroundColor = "white";

          }
        }

  return (
    <>
  
<Navbar tittle="TextUtiles"  Home="Home" about ="About" mode = {Mode}  toggleMode={toggleMode} />


  <Textfrom heading = "Enter your Massage :  " className="mx-5"  />
        



   </>
  );
}

export default App;

