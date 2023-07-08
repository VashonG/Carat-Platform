/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeroiconsOutlineHome } from "../../icons/HeroiconsOutlineHome";
import "./style.css";

export const MenuItem = ({
  label = "Home",
  state,
  icon = <HeroiconsOutlineHome className="heroicons-outline" color="#D98C33" />,
  homeClassName,
}) => {
  return (
    <div className="menu-item">
      {["active", "inactive"].includes(state) && (
        <>
          {icon}
          <div className={`home ${state} ${homeClassName}`}>{label}</div>
        </>
      )}

      {["notif-active", "notification"].includes(state) && (
        <>
          <HeroiconsOutlineHome
            className="heroicons-outline"
            color={state === "notif-active" ? "#D98C33" : "#495057"}
          />
          <div className={`text-wrapper state-${state}`}>{label}</div>
          <div className="group">
            <div className="overlap-group">
              <div className="element">3</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  state: PropTypes.oneOf(["notif-active", "inactive", "active", "notification"]),
};
