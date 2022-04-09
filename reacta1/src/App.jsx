// import logo from './logo.svg';
import './App.css';

function App() {
  const mobile = [
    {
      heading : "Mobile Operating System",
      items :[{names:"Android",icons:"disc"},
              {names:"Blackberry",icons:"disc"},
              {names:"iPhone",icons:"disc"},
              {names:"Windows Phone",icons:"disc"}
            ]      
    },
    {
      heading : "Mobile Manufactures",
      items :[{names:"Samsung",icons:"square"},
              {names:"HTC",icons:"square"},
              {names:"Micromax",icons:"circle"},
              {names:"Apple",icons:"ocircle"}
            ]      
    }
  ]
  
  return (
    <div className="App">      
        {mobile.map((e)=>(
          <Skill heading={e.heading} items={e.items}/>
        ))}        
    </div>
  );
}

function Skill({heading,items})
{  
  // console.log({heading,items})
    return (<div>
      <h1>{heading}</h1>
      <ul>
        {items.map((e)=>{
          return <li className={e.icons}>{e.names}</li>           ///inline styles  example <li style={{color: "blue"}}>
        })}
      </ul>

    </div>)   
    
}

export default App;
