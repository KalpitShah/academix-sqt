import { useContext } from "react";
import "./App.css";
import StartBox from "./components/sqt/StartBox";
import Report from "./components/sqt/Report";
import { QuestionContext } from "./contexts/QuestionContext";

function App() {
  const { showResult } = useContext(QuestionContext);

  return (
    <>
      <div className="App">{!showResult ? <StartBox /> : <Report />}</div>
    </>
  );
}

export default App;
