import React, { useState } from "react";
import InfoBox from "./InfoBox";

function StartBox() {
  const [openInfo, setOpenInfo] = useState(false);

  const handleClick = () => {
    setOpenInfo(true);
  };
  return (
    <>
      {!openInfo && <div className="start_btn">
        <button onClick={handleClick}>Start Quiz</button>
      </div>}
      {openInfo && <InfoBox setOpenInfo={setOpenInfo} />}
    </>
  );
}

export default StartBox;
