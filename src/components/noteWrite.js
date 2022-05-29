import React from "react";
import { Settings } from "./textSettings";
export function NoteEditor() {
  return (
    <section className="note-editor">
      <Settings></Settings>
      <textarea></textarea>
    </section>
  );
}
