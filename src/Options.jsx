import React from "react";

const Options = ({ questions, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  const handleOptionClick = (index) => {
    if (!hasAnswered) {
      dispatch({ type: "newAnswer", payload: index });
    }
  };
  return (
    <div>
      <div className="options">
        {questions.options.map((option, index) => {
          return (
            <button
              key={option}
              className={`btn btn-option ${index === answer ? "answer" : ""}${
                hasAnswered
                  ? index === questions.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              disabled={hasAnswered}
              onClick={handleOptionClick}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
