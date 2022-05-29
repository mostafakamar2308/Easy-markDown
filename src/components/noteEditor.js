import react from "react";

export function NoteList() {
  const [notes, setNotes] = react.useState([
    {
      title: "Note 2",
      body: "Hello",
    },
    {
      title: "Note 1",
      body: "Hello",
    },
  ]);
  function addNewNote() {
    const newNote = {
      title: `Note ${notes.length + 1}`,
      body: "Hello",
    };
    setNotes((prevNote) => [newNote, ...prevNote]);
  }
  return (
    <section>
      <div className="app-title">
        <h1>Notes</h1>
        <button className="add-new-note" onClick={addNewNote}>
          +
        </button>
      </div>
      <section>
        {notes.map((ele, index) => {
          return (
            <div className="note" key={index}>
              {ele.title}
            </div>
          );
        })}
      </section>
    </section>
  );
}
