
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';


function App() {
  return (
   <>
<Navbar title="text Utils" AboutText="About Us"/>

<div className="container">

<Textform heading="Enter text to analyse" />
</div>

  </>
  );

}

export default App;
