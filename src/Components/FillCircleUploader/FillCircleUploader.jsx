import React, { useState, useEffect } from "react";

const SpinnerUploader = () => {
  const [state, setState] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleClick = () => {
    handleDummyUploading();
  };

  useEffect(() => {
    state === 2 && setTimeout(() => setState(0), 3000);
  }, [state]);

  const handleDummyUploading = () => {
    setState(1);
    var percentage = 0;
    var interval = setInterval(() => {
      percentage = percentage + 1;
      setPercentage(percentage);
      if (percentage >= 100) {
        clearInterval(interval);
        setState(2);
        setPercentage(0);
      }
    }, 50);
  };

  return (
    <div
      className="Fill-circle-uploader-container"
      onClick={() => handleClick()}
      style={{ pointerEvents: `${state !== 0 ? "none" : "all"}` }}
    >
      <div className="Fill-circle-uploader-circle">
        <div
          className="Spinner-loader-action"
          style={{ animationName: `${state === 0 ? "show" : "hide"}` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
          </svg>
        </div>
        <div
          className="Fill-circle-uploader-action Fill-circle-uploader-filling"
          style={{ height: `${percentage}%` }}
        />
        <div
          className="Fill-circle-uploader-action Fill-circle-uploader-percentage"
          style={{ animationName: `${state === 1 ? "show" : "hide"}` }}
        >
          <p>{`${percentage}%`}</p>
        </div>
        <div
          className="Fill-circle-uploader-action"
          style={{ animationName: `${state === 2 ? "show" : "hide"}` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SpinnerUploader;
