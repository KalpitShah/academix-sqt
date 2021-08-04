import React, { useContext } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";

function ResultBox() {
  const { marksObtained } = useContext(QuestionContext);

  return (
    <div className="result_box activeResult">
      <div className="icon">
        <i className="fas fa-crown"></i>
      </div>
      <div className="complete_text">You've completed the Quiz!</div>
      <div className="score_text">
        {/* <!-- Here I've inserted Score Result from JavaScript --> */}
        {Object.keys(marksObtained).map((item, id) => (
          <div key={id}>
            <p >
              {item}: {marksObtained[item]}
            </p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="restart">Replay Quiz</button>
        <button className="quit">Quit Quiz</button>
      </div>
    </div>
  );
}

export default ResultBox;
