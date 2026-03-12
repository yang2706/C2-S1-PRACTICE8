import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;

    // 3 - Return the style object
      if (score <= 3){
        scoreColor = "#f3bc47";
      } else if (score <=6 ){
        scoreColor = "#b7cc3a";
      } else {
        scoreColor = "#7fb33b";
      }
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      
    };

  };
    const change = (e) => {
      let value = Number(e.target.value);
      if (value < 0) value = 0;
      if (value > 10) value = 10;
      setScore(value);
    };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={change}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
