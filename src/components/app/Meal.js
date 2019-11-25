import React from "react";
import { Unlock } from "react-feather";

function Meal({ name, image, readyInMinutes }) {
  return (
    <div className="my-1 px-1 w-full md:w-1/5 lg:px-3">
      <div className="relative flex items-center justify-between overflow-hidden bg-white rounded shadow md:flex-col md:h-56">
        <div className="w-full h-48 flex md:flex-col">
          <div
            className="w-full h-48 bg-cover"
            style={{
              backgroundImage: `url('${image}')`
            }}
          ></div>
          <div className="flex flex-col items-start justify-between py-4 ml-4">
            <span className="max-w-xs mb-1 font-medium leading-none">
              {name}
            </span>
            <div className="inline-flex items-center justify-center px-4 text-sm font-medium text-blue-700 uppercase bg-blue-200 rounded ">
              <span>{readyInMinutes} min</span>
            </div>
          </div>
        </div>
        <div>
          <button className="p-3 mr-4 border border-gray-200 rounded-full md:absolute md:top-0 md:right-0 md:bg-white md:m-2">
            <Unlock />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meal;
