import "./App.css";
import Dropdown from "./Dropdown.js";
function App() {
  const items = [
    "yellow",
    "red",
    "blue",
    "green",
    "orange",
    "gray",
    "purple",
    "aquamarine",
  ];
  return (
    <div className="App">
      <Dropdown items={items} allowMultiple={true} />
    </div>
  );
}

export default App;
