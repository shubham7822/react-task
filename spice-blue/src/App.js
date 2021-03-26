import logo from './logo.svg';
import './App.css';
import Navbar from "../src/Components/Navbar/Navbar"
import Task from './Components/Navbar/Tasks/Task';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Task/>
    </div>
  );
}

export default App;
