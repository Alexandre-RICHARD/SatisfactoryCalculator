import React from "react";
import { Route, Routes } from "react-router-dom";

import { RecipeCalculator } from "./pages/RecipeCalculator";
import { RecipesList } from "./pages/RecipesList";

export const Router = (): React.JSX.Element => {
  return (
    <Routes>
      <Route
        path="/recipes"
        element={<RecipesList />}
      />
      <Route
        path="/calculator"
        element={<RecipeCalculator />}
      />
    </Routes>
  );
};
