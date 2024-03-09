import React from "react";

const CloseBtn = ({ closeEvent }) => {
  return (
    <button className="menu__close-btn" onClick={closeEvent}>
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
    </button>
  );
};

export default CloseBtn;
