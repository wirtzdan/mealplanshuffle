import React from "react";
import Container from "./Container";
import { Shuffle, Settings } from "react-feather";

function MealPlanMenu() {
  return (
    <div className="fixed h-24 bg-white w-full border-t border-gray-400 inset-x-0 bottom-0 mt-auto">
      <Container>
        <navigation className="flex justify-between items-center">
          <Settings />
          <button className="flex bg-green-500 text-white px-4 py-2 rounded">
            <span>Shuffle</span>
            <Shuffle />
          </button>
        </navigation>
      </Container>
    </div>
  );
}

export default MealPlanMenu;
