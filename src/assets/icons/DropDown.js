import React from "react";

function DropDown({ className = "" }) {
  return (
    <svg
      id="drop_down"
      data-name="drop down"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect id="Frame" width="32" height="32" fill="#6c997a" opacity="0" />
      <path
        id="Symbol"
        d="M0,1.682A5.718,5.718,0,0,0,5.681-4,5.722,5.722,0,0,0,0-9.68,5.717,5.717,0,0,0-5.681-4,5.723,5.723,0,0,0,0,1.682Zm.592-3.99a.742.742,0,0,1-1.184,0L-2.856-4.717a.459.459,0,0,1-.018-.639.449.449,0,0,1,.656-.012L0-3.012,2.229-5.367a.435.435,0,0,1,.645.012.453.453,0,0,1-.018.639Z"
        transform="translate(16 20)"
        fill="#fff"
      />
    </svg>
  );
}

export default DropDown;
