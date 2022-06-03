import React from "react";

export function Settings(props) {
  let textInputArea = document.querySelector("#note-body");
  function focusOnTextArea() {
    textInputArea.focus();
  }
  function make(effect, length) {
    textInputArea.value += effect;
    let newValue = textInputArea.value;
    textInputArea.value = ``;
    textInputArea.value = newValue;
    length === -1
      ? textInputArea.setSelectionRange(length, length)
      : textInputArea.setSelectionRange(
          newValue.length - length,
          newValue.length - length
        );

    focusOnTextArea();
  }
  function makeHeading() {
    make(
      `
###`,
      -1
    );
  }

  function makeBold() {
    make(`****`, 2);
  }

  function makeItalic() {
    make("**", 1);
  }
  function makeLineThrough() {
    make("~~~~", 2);
  }

  function addQuote() {
    make("> ", -1);
  }

  function addUL() {
    make("-", -1);
  }

  function addOL() {
    make("1.", -1);
  }

  function addCheckBox() {
    make("-[]", 1);
  }

  function addURL() {
    make("[](url)", 1);
  }

  function addPhoto() {
    make("![](https://example.com/your-image.png)", 1);
  }

  function addCode() {
    make("``", 1);
  }

  return (
    <section className="style-tab">
      <div className="mode">
        <div className="active-mode" onClick={props.editClick}>
          Edit
        </div>

        <div onClick={props.previewClick}>Preview</div>
      </div>
      <div className="style">
        <button onClick={makeHeading}>H</button>
        <button onClick={makeBold}>B</button>
        <button style={{ fontStyle: "italic" }} onClick={makeItalic}>
          I
        </button>
        <button
          style={{ textDecoration: "line-through" }}
          onClick={makeLineThrough}
        >
          S
        </button>
      </div>
      <div className="add-file">
        <button onClick={addURL}>L</button>
        <button onClick={addPhoto}>Pic</button>
        <button onClick={addCode}>C</button>
        <button onClick={addQuote}>Quote</button>
      </div>
      <div className="list-style">
        <button onClick={addUL}>Dot</button>
        <button onClick={addOL}>Num</button>
        <button onClick={addCheckBox}>To-Do</button>
      </div>
    </section>
  );
}
