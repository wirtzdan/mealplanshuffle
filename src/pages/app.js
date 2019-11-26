import React from "react";

import App from "../components/app/App";
import SEO from "../components/website/SEO";
import MealPlanMenu from "../components/app/MealplanMenu";
import Meal from "../components/app/Meal";
import randomRecipes from "../data/recipes.json";
import Container from "../components/app/Container";

function IndexPage() {
  return (
    <App>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Container>
        <div className="h-full flex flex-wrap -mx-1 overflow-hidden lg:-mx-3">
          {randomRecipes.recipes.slice(0, 5).map(meal => {
            return (
              <Meal
                name={meal.title}
                image={meal.image}
                readyInMinutes={meal.readyInMinutes}
              />
            );
          })}
        </div>
      </Container>
      <MealPlanMenu />
    </App>
  );
}

export default IndexPage;
