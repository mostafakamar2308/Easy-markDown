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

  function handleInputChange() {
    let newInput = document.querySelector("#note-body").value;
    setActiveNote((prevNote) => {
      return { ...prevNote, body: newInput, active: true };
    });

    setNotes((prevNote) => [
      activeNote,
      ...prevNote.filter((ele) => ele.title !== activeNote.title),
    ]);
  }

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
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setActiveNote(newNote);
    document.querySelector("#note-body").value = newNote.body;
  }

  //function which preview the active Note
  function pressNote(e) {
    disableAllNotes();

    let noteId = Number(e.target.id);
    let newNotes = notes.map((ele, index) => {
      if (index === noteId) {
        return {
          ...ele,
          active: true,
        };
      }
      return ele;
    });

    setNotes([...newNotes]);
    setActiveNote(notes[noteId]);
    document.querySelector("#note-body").value = notes[noteId].body;
    return notes[noteId];
  }

  return (
    <section>
      <NoteList
        handleAddingNewNotes={addNewNote}
        noteList={notes}
        activeNote={activeNote}
        handlePressNote={pressNote}
      />
      <NoteEditor
        handleChange={handleInputChange}
        currentActiveNote={activeNote.body}
      />
    </section>
  );
}

export default App;
