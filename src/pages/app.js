import React from "react";

import App from "../components/app/App";
import SEO from "../components/website/SEO";
import MealPlanMenu from "../components/app/MealplanMenu";
import Meal from "../components/app/Meal";

function IndexPage() {
  return (
    <App>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section className="text-center">
        <h2 className="bg-gray-200 text-2xl font-bold inline-block my-8 p-3">
          This is the app
        </h2>
      </section>
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <MealPlanMenu />
    </App>
  );
}

export default IndexPage;
