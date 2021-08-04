import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";

function QuizBox() {
  // activeQuiz
  const {
    questions,
    optionChoosen,
    setOptionChoosen,
    setMarksObtained,
    marksArr,
    setMarksArr,
    setShowResult,
  } = useContext(QuestionContext);

  let categories = Object.keys(questions);
  let [catIndex, setCatIndex] = useState(0);
  const [currCategory, setCurrCategory] = useState(categories[catIndex]);
  const [firstCat, setFirstCat] = useState(true);
  const [lastCat, setLastCat] = useState(false);
  const [unChoosenQue, setUnChoosenQue] = useState([]);

  useEffect(() => {
    if (
      Object.keys(questions).length === 0 &&
      questions.constructor === Object
    ) {
      return <CircularProgress />;
    }
    let totalCategories = Object.keys(questions);
    for (let i = 0; i < totalCategories.length; i++) {
      const category = totalCategories[i];
      // console.log("Hello Ji",questions[category].length)

      setMarksArr((prevState) => {
        return {
          ...prevState,
          [category]: new Array(questions[category].length).fill(null),
        };
      });
    }
  }, [questions, setMarksArr]);

  let totalLength = categories.length;
  useEffect(() => {
    if (totalLength === 0) {
      alert("Something Went Wrong!");
    }
    if (catIndex === 0) {
      setFirstCat(true);
      setLastCat(false);
    }
    if (catIndex > 0) {
      setFirstCat(false);
      setLastCat(false);
    }

    if (catIndex === totalLength - 1) setLastCat(true);
  }, [totalLength, catIndex, lastCat, firstCat]);

  const submitQuiz = () => {
    setShowResult(true);
  };

  const nextQue = () => {
    if (marksArr[currCategory].includes(null)) {
      const s = marksArr[currCategory].reduce((acc, item, index) => {
        if (item === null) acc.push(index);
        return acc;
      }, []);
      setUnChoosenQue(s);
    } else if (lastCat) {
      const marksSum = marksArr[currCategory].reduce((total, item) => {
        return total + item;
      }, 0);
      // Final marks = summation(option_weightage)/(num_of_questions * num_of_option)
      const calculatedMarks =
        marksSum /
        (questions[currCategory].length *
          questions[currCategory][0].options.length);
      setMarksObtained((prevState) => ({
        ...prevState,
        [currCategory]: calculatedMarks,
      }));
      submitQuiz();
      return;
    } else {
      const marksSum = marksArr[currCategory].reduce((total, item) => {
        return total + item;
      }, 0);
      // Final marks = summation(option_weightage)/(num_of_option * num_of_questions)
      const calculatedMarks =
        marksSum /
        (questions[currCategory].length *
          questions[currCategory][0].options.length);
      setMarksObtained((prevState) => ({
        ...prevState,
        [currCategory]: calculatedMarks,
      }));
      setCatIndex(++catIndex);
      setCurrCategory(categories[catIndex]);
      setUnChoosenQue([]);
    }
  };

  const prevQue = () => {
    setUnChoosenQue([])
    setCatIndex(--catIndex);
    setCurrCategory(categories[catIndex]);
  };

  const optionSelect = (currentCategory, questionId, optionId, marks) => {
    let cloneMarkArr = marksArr[currentCategory].slice();
    cloneMarkArr[questionId] = marks;
    setMarksArr((prevState) => ({
      ...prevState,
      [currentCategory]: cloneMarkArr,
    }));
    setOptionChoosen((prevState) => ({
      ...prevState,
      [currentCategory]: {
        ...prevState[currentCategory],
        [questionId + 1]: optionId,
      },
    }));
  };

  return (
    <>
      <>
        <div className="quiz_box activeInfo activeQuiz">
          <header>
            <div className="title">Academix SQT</div>
            <div className="time_line"></div>
          </header>
          <section>
            <h5>{currCategory}</h5>

            {questions[currCategory].map((item, questionID) => (
              <div key={questionID}>
                <div className="que_text">
                  {/* <!-- Here I've inserted question from JavaScript --> */}
                  <span>
                    {questionID + 1}. {item.question}
                  </span>
                </div>
                <div
                  className="error_text"
                  hidden={unChoosenQue.includes(questionID) ? false : true}
                >
                  <h6>*Please Choose an option</h6>
                </div>

                <div className="option_list">
                  {item.options.map((option, optionId) => (
                    <div
                      className={
                        optionChoosen[currCategory][questionID + 1] === optionId
                          ? "option active"
                          : "option"
                      }
                      key={optionId}
                      onClick={() =>
                        optionSelect(
                          currCategory,
                          questionID,
                          optionId,
                          option.optionWeightage
                        )
                      }
                    >
                      <span>{option.optionText}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
          {/* <!-- footer of Quiz Box --> */}
          {/* <QuizBoxFooter startTimer={startTimer} /> */}

          <footer>
            <button
              onClick={prevQue}
              className={firstCat ? "prev_btn" : "prev_btn show"}
            >
              Previous Que
            </button>
            <button onClick={nextQue} className="next_btn show">
              {lastCat ? "Submit" : "Next Que"}
            </button>
          </footer>
        </div>
      </>
    </>
  );
}

export default QuizBox;
