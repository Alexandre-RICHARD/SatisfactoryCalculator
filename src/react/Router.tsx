import React from "react";
import { Route, Routes } from "react-router-dom";

import { FactoryLineCalculator } from "./pages/FactoryLineCalculator";
import { NotFound } from "./pages/NotFound";
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
        element={<FactoryLineCalculator />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};
