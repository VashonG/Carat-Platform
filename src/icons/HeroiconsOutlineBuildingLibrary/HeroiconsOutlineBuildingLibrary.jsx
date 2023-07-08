/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HeroiconsOutlineBuildingLibrary = ({ color = "#0F172A", className }) => {
  return (
    <svg
      className={`heroicons-outline-building-library ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 21.3906V13.1406M15.75 21.3906V13.1406M8.25 21.3906V13.1406M3 9.39062L12 3.39062L21 9.39062M19.5 21.3906V10.7231C17.0563 10.3397 14.5514 10.1406 12 10.1406C9.44861 10.1406 6.94372 10.3397 4.5 10.7231V21.3906M3 21.3906H21M12 7.14062H12.0075V7.14813H12V7.14062Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

HeroiconsOutlineBuildingLibrary.propTypes = {
  color: PropTypes.string,
};
