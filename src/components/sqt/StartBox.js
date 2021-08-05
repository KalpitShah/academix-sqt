import React, { useState, useContext } from "react";
import InfoBox from "./InfoBox";
import TextField from "@material-ui/core/TextField";
import { QuestionContext } from "../../contexts/QuestionContext";
import firebase from "./firebase";

function StartBox() {
  const [openInfo, setOpenInfo] = useState(false);
  const { userInfo, setUserInfo } = useContext(QuestionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setOpenInfo(true);
  };

  const handleChange = (e) => {
    e.persist();
    let { name, value } = e.target;
    setUserInfo(() => ({...userInfo, [name]: value}));
  }

  return (
    <>
      {!openInfo && 
      <div className={"info_box activeInfo"}>
        <div className="info-title">
          <span>Academix SQT</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="info-list">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={userInfo.name}
              label="Name"
              name="name"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={userInfo.email}
              label="Email Address"
              name="email"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={userInfo.contact}
              label="Contact Number"
              name="contact"
              onChange={handleChange}
            />
          </div>
          <div className="buttons">
            <button type="submit" className="restart">
              Next
            </button>
          </div>
        </form>
      </div>}
      {openInfo && <InfoBox setOpenInfo={setOpenInfo} />}
    </>
  );
}

export default StartBox;
