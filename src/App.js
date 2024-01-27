import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/textform";
import React, { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleSwitch = () => {
    console.log("hello");
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='black'
    } else {
      setMode("light");
      document.body.style.backgroundColor='white'
    }
  };
const [alert,setAlert]=useState('null');
const showAlert=(message,type)=>{
  setAlert({msg : message,
  type : type})

};

  return (
    <>
      <Navbar
        title="text Utils"
        AboutText="About Us"
        Toggle={Mode}
        toggleMode={toggleSwitch}
      />
      <Alert alert={alert}/>
      <div className="container">
        <Textform heading='Text analyser' Toggle={Mode}  showAlert=/>
      </div>
    </>
  );
}

export default App;
