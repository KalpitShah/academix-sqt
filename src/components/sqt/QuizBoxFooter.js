import React from "react";

function QuizBoxFooter({ startTimer }) {
  return (
    <footer>
      <div className="total_que ">
        {/* <!-- Here I've inserted Question Count Number from JavaScript --> */}
      </div>
      <button className={startTimer ? "next_btn" : "next_btn show"}>
        Next Que
      </button>
    </footer>
  );
}

export default QuizBoxFooter;
