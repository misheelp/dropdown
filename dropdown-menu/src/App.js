import "./App.css";
import Dropdown from "./Dropdown.js";
function App() {
  const items = ["yellow", "red", "blue"];
  return (
    <div className="App">
      <Dropdown items={items} allowMultiple={false} />
    </div>
  );
}

export default App;
