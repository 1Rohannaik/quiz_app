import React from "react";

const StartScreen = ({ length, dispatch }) => {
  const handelStart = () => {
    dispatch({type:"start"})
  }
  return (
    <div className="start">
      <h3>{length} questions to test your react mastary</h3>
      <button className="btn" onClick={handelStart}>
        lets start
      </button>
    </div>
  );
};

export default StartScreen;
