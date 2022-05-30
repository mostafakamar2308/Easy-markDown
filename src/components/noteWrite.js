import React from "react";
import { Settings } from "./textSettings";
export function NoteEditor(props) {
  const [textInPlace, setTextInPlace] = React.useState(props.currentActiveNote);
  function keyStroke(e) {
    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setTextInPlace((text) => text.slice(0, -1));
    } else if (e.nativeEvent.inputType === "deleteWordBackward") {
      console.log(textInPlace);
      setTextInPlace((text) => text.substring(0, text.lastIndexOf(" ")));
    } else {
      setTextInPlace((text) => [text, e.nativeEvent.data].join(""));
    }
  }
  return (
    <section className="note-editor">
      <Settings></Settings>
      <textarea
        id="note-body"
        value={textInPlace}
        onChange={keyStroke}
        onKeyDown={props.handleWriting}
      ></textarea>
    </section>
  );
}
