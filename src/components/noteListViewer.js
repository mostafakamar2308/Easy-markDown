export function NoteList(props) {
  return (
    <section>
      <div className="app-title">
        <h1>Notes</h1>
        <button className="add-new-note" onClick={props.handleAddingNewNotes}>
          +
        </button>
      </div>
      <section>
        {props.noteList.map((ele, index) => {
          return (
            <div
              className={`note ${
                ele.active ? "active-note" : "not-active-note"
              }`}
              key={index}
              id={index}
              onClick={props.handlePressNote}
            >
              {ele.title}
            </div>
          );
        })}
      </section>
    </section>
  );
}
