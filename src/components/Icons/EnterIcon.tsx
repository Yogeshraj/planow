import React from "react";

const EnterIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        rx="6"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="5.5"
        stroke="currentColor"
        strokeOpacity="0.08"
      />
      <mask maskUnits="userSpaceOnUse" x="6" y="6" width="12" height="12">
        <rect x="6" y="6" width="12" height="12" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_120_147)">
        <path
          d="M10.5 15L7.5 12L10.5 9L11.2 9.7L9.4 11.5H15.5V9.5H16.5V12.5H9.4L11.2 14.3L10.5 15Z"
          fill="currentColor"
          fillOpacity="0.64"
        />
      </g>
    </svg>
  );
};

export default EnterIcon;
