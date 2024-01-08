import "./styles.css";

import React, { useState } from "react";

export default function App() {
  //let isActive = false;
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
