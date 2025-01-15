import "./Apping.css";
import TextDisplay from "./components/ListTodo/TextDisplay";
import Tringtoggle from "./components/ListTodo/Tringtoggle";

function App() {
  return (
    <div>
      <h1 className="Alllist">To do and Done list</h1>
      <hr></hr>
      <div>
        <TextDisplay />
        <Tringtoggle />
      </div>
      <div className="verticalline"></div>
    </div>
  );
}

export default App;
