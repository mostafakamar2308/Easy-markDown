import React from "react";

export function Settings() {
  return (
    <section className="style-tab">
      <div className="mode">
        <div>Edit</div>

        <div>Preview</div>
      </div>
      <div className="style">
        <button>H</button>
        <button>B</button>
        <button style={{ fontStyle: "italic" }}>I</button>
        <button style={{ textDecoration: "line-through" }}>S</button>
      </div>
      <div className="add-file">
        <button>L</button>
        <button>Q</button>
        <button>C</button>
        <button>Pic</button>
      </div>
      <div className="list-style">
        <button>Dot</button>
        <button>Num</button>
        <button>To-Do</button>
      </div>
    </section>
  );
}
