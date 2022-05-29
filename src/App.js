import "./App.css";
import { NoteList } from "./components/noteEditor";
import { NoteEditor } from "./components/noteWrite";

function App() {
  return (
    <div className="App">
      <NoteList />
      <NoteEditor />
    </div>
  );
}

export default App;
