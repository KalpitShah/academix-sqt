import React, { useState, useEffect, useContext } from "react";
import QuizBox from "./QuizBox";
import firebase from "../../firebase";
import { QuestionContext } from "../../contexts/QuestionContext";

function InfoBox({ setOpenInfo }) {
  // activeInfo
  const [openQuiz, setOpenQuiz] = useState(false);
  const { setQuestions } = useContext(QuestionContext);

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection("sqt");
    ref
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          let id = doc.id;
          let data = doc.data();
          let suffledQuestions = data.questions
            .sort(() => Math.random() - Math.random())
            .slice(0, 5);
          setQuestions((prevState) => ({
            ...prevState,
            [id]: suffledQuestions,
          }));
        });
      })
      .catch((error) => {
        alert("Something went wrong!");
        console.log("Error getting document:", error);
      });
  }, [setQuestions]);

  const handelClick = () => {
    setOpenQuiz(true);
    // console.log(questions)
  };
  return (
    <>
      <div className={openQuiz ? "info_box" : "info_box activeInfo"}>
        <div className="info-title">
          <span>Some Rules of this Quiz</span>
        </div>
        <div className="info-list">
          <div className="info">
            1. You will have only <span>15 seconds</span> per each question.
          </div>
          <div className="info">
            2. Once you select your answer, it can't be undone.
          </div>
          <div className="info">
            3. You can't select any option once time goes off.
          </div>
          <div className="info">
            4. You can't exit from the Quiz while you're playing.
          </div>
          <div className="info">
            5. You'll get points on the basis of your correct answers.
          </div>
        </div>
        <div className="buttons">
          <button className="quit" onClick={() => setOpenInfo(false)}>
            Exit Quiz
          </button>
          <button className="restart" onClick={handelClick}>
            Continue
          </button>
        </div>
      </div>
      {openQuiz && <QuizBox openQuiz={openQuiz} />}
    </>
  );
}

export default InfoBox;
