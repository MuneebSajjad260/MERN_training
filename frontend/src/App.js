import React from "react";

import { useState } from "react";
import axios from "axios";
import './App.css';
// import Image from './components/body'
function App() {
  const [inputField, setInputField] = useState({
    profilePic: "",
  });

  const handleFile = (e) => {

    console.log("my file is", e.target.files[0]);
    setInputField({ ...inputField, profilePic: e.target.files[0] });
  };
  const handleUpload = async () => {
    console.log('pofilrpic file=',inputField.profilePic,'profilpic name=',inputField.profilePic.name)
    var formdata = new FormData();
    formdata.append("file", inputField.profilePic, inputField.profilePic.name);
   
    try {
      let response = await axios.post("http://localhost:5002/api/upload", formdata);
      if (response.status === 200) {
        console.log("picture added");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <h1>the form</h1>
      <form>
        <div>
          <label>Select file</label>
          <input
            type="file"
            name="file "
            onChange={(e) => handleFile(e)}
          ></input>
        </div>
        <button type="button" onClick={(e) => handleUpload()}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;
