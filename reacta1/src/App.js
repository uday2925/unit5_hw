// import logo from './logo.svg';
import './App.css';

function App() {
  const mobileos=["android","blackberry","iphone","windowsphone"];
  const mobilem=["samsung","HTC","micromax","Apple"]
  return (
    <div className="App">
      <div>
          <h2>Mobile Operating System</h2>
          <ul>
            {mobileos.map((e)=>{
              return <li>{e}</li>
            })}
          </ul>
          <h2>Mobile Manufacturers</h2>
          <ul>
            {mobilem.map((e)=>{
                return <li>{e}</li>
            })}
          </ul>
      </div>           
    </div>
  );
}

export default App;
