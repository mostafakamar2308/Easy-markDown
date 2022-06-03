import React, { useEffect } from "react";
import { Settings } from "./textSettings";
export function NoteEditor(props) {
  const [textInPlace, setTextInPlace] = React.useState(props.currentActiveNote);

  useEffect(() => {
    setTextInPlace(props.currentActiveNote);
  }, [props.currentActiveNote]);

  function toggleActiveMode() {
    let children = Array.from(document.querySelector(".mode").children);
    children.forEach((ele) => ele.classList.toggle("active-mode"));
  }
  function previewNote() {
    toggleActiveMode();
    document.querySelector("#note-body").style.display = "none";
    document.querySelector("#note-preview").style.display = "block";
  }

  function editNote() {
    toggleActiveMode();
    document.querySelector("#note-body").style.display = "block";
    document.querySelector("#note-preview").style.display = "none";
  }
  return (
    <section className="note-editor">
      <Settings previewClick={previewNote} editClick={editNote}></Settings>
      <textarea
        id="note-body"
        defaultValue={textInPlace}
        onChange={props.handleChange}
        // onChange={keyStroke}
        // onKeyDown={props.handleWriting}
      ></textarea>
      <div id="note-preview">{previewText}</div>
    </section>
  );
}
