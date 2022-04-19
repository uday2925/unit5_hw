
import './App.css';
import {Button} from "./components/Button.jsx"

function App() {
  return (
    <div className="App">
      <Button btn_type={"primary"}>Primary</Button>
      <Button btn_type={"normal"}>Default Button</Button>
      <Button btn_type={"dashede"}>Dashed button</Button>
    </div>
  );
}

export default App;
