import "./Apping.css";
import TextDisplay from "./components/ListTodo/TextDisplay";
import Search from "./components/DoneList/Search";

function App() {
  return (
    <div>
      <h1 className="Alllist">To do and Done lists</h1>
      <hr></hr>
      <TextDisplay />
      <div className="verticalline">
        <div className="donelistinputbox">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
