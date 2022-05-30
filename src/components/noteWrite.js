import { Settings } from "./textSettings";
export function NoteEditor(props) {
  return (
    <section className="note-editor">
      <Settings></Settings>
      <textarea value={props.currentActiveNote}></textarea>
    </section>
  );
}
