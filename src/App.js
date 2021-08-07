import { useContext } from "react";
import "./App.css";
import StartBox from "./components/sqt/StartBox";
import Report from "./components/sqt/Report";
import Filled from "./components/sqt/Filled";
import { QuestionContext } from "./contexts/QuestionContext";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const { showResult } = useContext(QuestionContext);

  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <div className="App">{!showResult ? <StartBox /> : <Report />}</div>
        </Route>
        <Route exact path="/responses">
          <Filled />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
