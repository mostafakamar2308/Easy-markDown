import "./App.css";
import React from "react";
import { NoteList } from "./components/noteListViewer";
import { NoteEditor } from "./components/noteWrite";

function App() {
  const [notes, setNotes] = React.useState([
    {
      title: "Note 2",
      body: "Hello from Note 2",
      active: true,
    },
    {
      title: "Note 1",
      body: "Hello from Note 1",
      active: false,
    },
  ]);

  const [activeNote, setActiveNote] = React.useState(notes[0]);

  // Function to make all active notes not active easily
  function disableAllNotes() {
    setNotes((prevNotes) => {
      return prevNotes.map((ele) => {
        if (ele.active === true) {
          ele.active = false;
        }
        return ele;
      });
    });
  }

  //the function to Add New notes to the state
  function addNewNote() {
    disableAllNotes();
    let newNote = {
      title: `Note ${notes.length + 1}`,
      body: `Hello From Note ${notes.length + 1}`,
      active: true,
    };
    setActiveNote(newNote);
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  //function which preview the active Note
  function pressNote(e) {
    disableAllNotes();

    let noteId = Number(e.target.id);
    console.log(noteId);

    setNotes((prevNotes) => {
      return prevNotes.map((ele, index) => {
        if (index === noteId) {
          ele.active = true;
        }
        return ele;
      });
    });
    setActiveNote(notes[noteId]);
  }

  return (
    <div className="App">
      <NoteList
        handleAddingNewNotes={addNewNote}
        noteList={notes}
        activeNote={activeNote}
        handlePressNote={pressNote}
      />
      <NoteEditor currentActiveNote={activeNote.body} />
    </div>
  );
}

export default App;
