import React from "react";
import { Unlock } from "react-feather";

function Meal(props) {
  return (
    <div className="flex bg-white max-w-4xl rounded-lg overflow-hidden items-center justify-between mx-4 shadow mb-4">
      <div className="flex">
        <img
          className="h-20 w-20"
          src="https://images.unsplash.com/photo-1475856033578-76b4a228f5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
        />
        <div className="ml-4  flex flex-col justify-center items-start">
          <span className="text-lg mb-1 font-medium">Delicous Cookies</span>
          <div className="inline-flex items-center justify-center bg-blue-200 text-blue-700 rounded px-4 text-sm uppercase font-medium ">
            <span>30 min</span>
          </div>
        </div>
      </div>
      <div>
        <button className="mr-4">
          <Unlock />
        </button>
      </div>
    </div>
  );
}

export default Meal;
