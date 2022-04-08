// import logo from './logo.svg';
import './App.css';

function App() {

  const midlinks=["Services","Projects","About"];
  return (
    <div className="App">
      <div id="navbar">
        <div id="bakerylogo">
          LOGOBAKERY
        </div>
        <div id="midlinks">
            {midlinks.map((e)=>{
              console.log("map",{e})
            return <Linksc names={e} />
            })}          
        </div>
        <div >
            <button id="button">Contact</button>
        </div>
      </div>
    </div>
  );
}

function Linksc(props)
{
  console.log("props",props)
  return <div class><a id="links">{props.names}</a></div>
}

export default App;
