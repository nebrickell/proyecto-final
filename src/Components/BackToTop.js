import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function BackToTop() {
  return (
    <a href="#" className="button-backtotop">
      <FontAwesomeIcon
        icon={faArrowUp}
        style={{
          color: "white",
          boxSizing: "border-box",
          marginTop: "0.75rem",
        }}
      />
    </a>
  );
}

export default BackToTop;
