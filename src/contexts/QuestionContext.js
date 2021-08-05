import React, { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    "name": "",
    "email": "",
    "contact": "",
  });

  const [questions, setQuestions] = useState({});
  // https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
  const [optionChoosen, setOptionChoosen] = useState({
    "Design Thinking": {},
    "Effective Communication": {},
    "Problem Solving": {},
    "Resilience": {},
    "Team Work": {},
  });

  const [marksArr, setMarksArr] = useState({
    "Design Thinking": [],
    "Effective Communication": [],
    "Problem Solving": [],
    "Resilience": [],
    "Team Work": [],
  });

  const [marksObtained, setMarksObtained] = useState({
    "Design Thinking": 0,
    "Effective Communication": 0,
    "Problem Solving": 0,
    "Resilience": 0,
    "Team Work": 0,
  });

  const [showResult, setShowResult] = useState(false);
  const value = {
    questions,
    setQuestions,
    optionChoosen,
    setOptionChoosen,
    marksObtained,
    setMarksObtained,
    marksArr,
    setMarksArr,
    showResult,
    setShowResult,
    userInfo, 
    setUserInfo,
  };
  return (
    <QuestionContext.Provider value={value}>
      {props.children}
    </QuestionContext.Provider>
  );
};
