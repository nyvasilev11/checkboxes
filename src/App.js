import React from "react";
import CheckBox from "./Ckeckbox";

function App() {
  const allGroups = {
    display: "flex",
    justifyContent: "space-around"
  };

  const column = {
    display: "flex",
    flexDirection: "column"
  };

  const line = {
    display: "flex"
  };

  return (
    <section className="App" style={allGroups}>
      <div className="checkboxes">
        <CheckBox indexId={1} />
      </div>
      <div style={column}>
        <CheckBox indexId={2} disabled checked />
        <CheckBox indexId={3} />
        <CheckBox indexId={4} disabled />
      </div>
      <div className="checkboxes--line" style={line}>
        <CheckBox indexId={5} checked />
        <CheckBox indexId={6} disabled />
        <CheckBox indexId={7} />
      </div>
    </section>
  );
}

export default App;
