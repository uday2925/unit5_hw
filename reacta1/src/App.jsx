// import logo from './logo.svg';
import './App.css';

function App() {
  const mobile = [
    {
      heading : "Mobile Operating System",
      items : ["Android", "Blackberry","iPhone","Windows Phone"],
      styles1:["circle","circle","circle","circle"]
    },
    {
      heading : "Mobile Manufactures",
      items : ["Samsung", "HTC","Micromax","Apple"],
      styles1 : ["square","square","circle","ocircle"]
    }
  ]

  
  return (
    <div className="App">      
        {mobile.map((e)=>(
          <Skill heading={e.heading} items={e.items} />
        ))}        
    </div>
  );
}

function Skill({heading,items,styles})
{
  console.log(items,styles)
    return (<div>
      <h1>{heading}</h1>
      <ul>
        {items.map((e)=>{
          return <li style={{color: "red"}}>{e}</li>
        })}
      </ul>

    </div>)
   
    
}

export default App;
