import React from "react";
import { Route, Routes } from "react-router-dom";

import { Graph } from "./pages/Graph/Graph";
import { RecipesList } from "./pages/RecipesList/RecipesList";

export const Router = (): React.JSX.Element => {
  return (
    <Routes>
      <Route
        path="/recipes"
        element={<RecipesList />}
      />
      <Route
        path="/graph"
        element={<Graph />}
      />
    </Routes>
  );
};
