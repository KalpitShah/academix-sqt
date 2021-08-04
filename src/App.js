import { useContext } from "react";
import "./App.css";
import ResultBox from "./components/sqt/ResultBox";
import StartBox from "./components/sqt/StartBox";
import { QuestionContext } from "./contexts/QuestionContext";

function App() {
  const { showResult } = useContext(QuestionContext);

  return (
    <>
      <div className="App">{!showResult ? <StartBox /> : <ResultBox />}</div>
    </>
  );
}

export default App;
