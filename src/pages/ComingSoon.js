import React from "react";
import whitelogo from "../img/logo.svg";

const ComingSoon = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-indigo-800 via-blue-500 to-blue-900 grid place-items-center">
      <div>
        <img src={whitelogo} alt="logo" class="mx-auto h-80" />
        <h1 className="text-8xl text-white">Coming Soon</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
