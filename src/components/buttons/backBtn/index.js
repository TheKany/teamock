import React from "react";

const BackBtn = ({ backEvent, location }) => {
  return (
    <button onClick={backEvent}>
      {location.pathname.includes("main") ? (
        <svg
          width="14"
          height="26"
          viewBox="0 0 14 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L1 13L13 25"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L25 25M1 25L25 1"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default BackBtn;
