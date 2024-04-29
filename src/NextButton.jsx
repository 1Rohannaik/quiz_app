import React from "react";

const NextButton = ({ dispatch, answer,index,length }) => {
  const nextQuestion = () => {
    dispatch({ type: "nextQuestion" });
  };
  if (answer === null) return null;
  if (index < length)return (
    <button className="btn btn-ui" onClick={nextQuestion}>
      next
    </button>
  );
    if (index === length-1)
      return (
        <button className="btn btn-ui" onClick={()=>({type:"finish"})}>
          next
        </button>
      );
};

export default NextButton;
