import "./Apping.css";
import TextDisplay from "./components/ListTodo/TextDisplay";

function App() {
  return (
    <div>
      <h1 className="Alllist">To do and Done list</h1>
      <hr></hr>
      <TextDisplay />
      <div className="verticalline"></div>
    </div>
  );
}

export default App;
