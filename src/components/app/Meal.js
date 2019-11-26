import React from "react";
import { Unlock } from "react-feather";

function Meal({ name, image, readyInMinutes }) {
  return (
    <div className="my-1 px-1 w-full md:w-1/5 lg:px-3">
      <div className="relative flex items-center justify-between overflow-hidden bg-white rounded border border-gray-100 shadow md:flex-col">
        <div className="flex w-full h-24 md:flex-col lg:h-auto">
          <div
            className="w-2/5 bg-cover md:h-48 md:w-full"
            style={{
              backgroundImage: `url('${image}')`
            }}
          ></div>
          <div className="w-3/5 flex flex-col items-start justify-between py-4 ml-4">
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
