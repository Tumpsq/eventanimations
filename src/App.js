import React from "react";
import "./styles.css";

import SpinnerUploader from "./Components/SpinnerUploader/SpinnerUploader";
import FillCircleUploader from "./Components/FillCircleUploader/FillCircleUploader";
import CircleButton from "./Components/CircleButton/CircleButton";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <p>UPLOAD ANIMATIONS</p>
        <SpinnerUploader />
        <FillCircleUploader />
      </div>
      <div className="Container">
        <CircleButton />
      </div>
    </div>
  );
}
