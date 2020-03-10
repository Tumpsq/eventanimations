import React from "react";
import "./styles.css";

import SpinnerUploader from "./Components/SpinnerUploader/SpinnerUploader";
import FillCircleUploader from "./Components/FillCircleUploader/FillCircleUploader";

export default function App() {
  return (
    <div className="App">
      <div>
        <p>CLICK COMPONENT FOR DEMONSTRATION</p>
      </div>
      <SpinnerUploader />
      <FillCircleUploader />
    </div>
  );
}
