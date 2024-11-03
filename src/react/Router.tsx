import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeWrapper } from "./monitoring/components/themeWrapper";
import { ToggleTheme } from "./monitoring/components/toggleTheme";
import { FactoryLineCalculator } from "./pages/FactoryLineCalculator";
import { Monitoring } from "./pages/Monitoring";
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
        path="/monitoring/*"
        element={
          <ThemeWrapper>
            <ToggleTheme>
              <Monitoring />
            </ToggleTheme>
          </ThemeWrapper>
        }
      />
    </Routes>
  );
};
