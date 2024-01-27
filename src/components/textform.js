import React, { useState } from "react";

export default function Textform(props) {
  const [Text, Settext] = useState("");
  const handleUpClick = () => {
    //console.log("upper case clicked  "+Text)
    let newText = Text.toUpperCase();
    Settext(newText);
  };
  const handleLowerClick = () => {
    //console.log("upper case clicked  "+Text)
    let newText1 = Text.toLowerCase();
    Settext(newText1);
  };
  const handleClearText = () => {
    //console.log("upper case clicked  "+Text)
    let newText2 = "";
    Settext(newText2);
  };
  const handleOnChanged = (event) => {
    Settext(event.target.value);
    //console.log("hhandleOnChanged ")
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.Toggle === "light" ? "grey" : "white" }}
      >
        <h1>{props.heading}</h1>

        <div
          className="mb-3"
          style={{ color: props.Toggle === "light" ? "grey" : "white" }}
        >
          <textarea
            className="form-control"
            style={{
              color: props.Toggle === "light" ? "grey" : "blue",
              backgroundColor: props.Toggle === "light" ? "white" : "grey",
            }}
            id=""
            cols="100"
            rows="10"
            onChange={handleOnChanged}
            value={Text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 " onClick={handleUpClick}>
          Convert Text up
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert text to lower
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Reset
        </button>
      </div>

      <div
        className="my-2"
        style={{ color: props.Toggle === "light" ? "grey" : "white" }}
      >
        <h1>My text summary </h1>
        <p>
          {Text.split(" ").length} words No of charecterinwords{Text.length}{" "}
        </p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
