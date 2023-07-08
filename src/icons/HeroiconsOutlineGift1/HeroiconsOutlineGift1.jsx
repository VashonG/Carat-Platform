/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HeroiconsOutlineGift1 = ({ color = "#495057", className }) => {
  return (
    <svg
      className={`heroicons-outline-gift-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21 11.25V19.5C21 20.3284 20.3284 21 19.5 21H5.25C4.42157 21 3.75 20.3284 3.75 19.5V11.25M12 4.875C12 3.42525 10.8247 2.25 9.375 2.25C7.92525 2.25 6.75 3.42525 6.75 4.875C6.75 6.32475 7.92525 7.5 9.375 7.5C10.1095 7.5 12 7.5 12 7.5M12 4.875C12 5.59024 12 7.5 12 7.5M12 4.875C12 3.42525 13.1753 2.25 14.625 2.25C16.0747 2.25 17.25 3.42525 17.25 4.875C17.25 6.32475 16.0747 7.5 14.625 7.5C13.8905 7.5 12 7.5 12 7.5M12 7.5V21M3.375 11.25H21.375C21.9963 11.25 22.5 10.7463 22.5 10.125V8.625C22.5 8.00368 21.9963 7.5 21.375 7.5H3.375C2.75368 7.5 2.25 8.00368 2.25 8.625V10.125C2.25 10.7463 2.75368 11.25 3.375 11.25Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

HeroiconsOutlineGift1.propTypes = {
  color: PropTypes.string,
};
