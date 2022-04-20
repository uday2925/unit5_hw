import logo from './logo.svg';
import './App.css';
import { Navbar } from './componenets/navbar';
import { Loginstatus } from './componenets/loginstatus';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Loginstatus/>
    </div>
  );
}

export default App;
