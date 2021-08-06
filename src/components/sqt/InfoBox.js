import React, { useState, useEffect, useContext } from "react";
import QuizBox from "./QuizBox";
import firebase from "./firebase";
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

  const handleClick = () => {
    setOpenQuiz(true);
    // console.log(questions)
  };
  return (
    <>
      {!openQuiz && <div className={openQuiz ? "info_box" : "info_box activeInfo"}>
        <div className="info-title">
          <span>Some Rules of this Quiz</span>
        </div>
        <div className="info-list">
          <div className="info">
            1. Describe yourself as you generally are now, not as you wish to be in the future.
          </div>
          <div className="info">
            2. Kindly fill the most appropriate answer based on your understanding to get accurate results.
          </div>
          <div className="info">
            3. Do no refresh while taking the test
          </div>
          <div className="info">
            4. You'll be awarded points on the basis of your answers.
          </div>
          <div className="info">
            5. You can't quit once you start the Skill Quotient Test.
          </div>
        </div>
        <div className="buttons">
          <button className="quit" onClick={() => setOpenInfo(false)}>
            Exit Quiz
          </button>
          <button className="restart" onClick={handleClick}>
            Continue
          </button>
        </div>
      </div>}
      {openQuiz && <QuizBox openQuiz={openQuiz} />}
    </>
  );
}

export default InfoBox;
