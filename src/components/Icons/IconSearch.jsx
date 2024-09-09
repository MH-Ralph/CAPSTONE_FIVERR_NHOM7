import React from "react";

const IconSearch = ({ size = 25, color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M12.048 11.074L15 14.025l-.975.975l-2.951-2.952A6.205 6.205 0 0 1 1 7.202A6.205 6.205 0 0 1 7.203 1a6.205 6.205 0 0 1 4.845 10.074m-1.382-.512a4.823 4.823 0 0 0-3.463-8.184a4.823 4.823 0 0 0-4.825 4.825a4.823 4.823 0 0 0 8.184 3.463zM8.015 4.567a1.379 1.379 0 1 0 1.823 1.824a2.758 2.758 0 1 1-5.392.812a2.757 2.757 0 0 1 3.569-2.636"
      />
    </svg>
  );
};

export default IconSearch;
