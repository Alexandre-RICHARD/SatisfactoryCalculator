import "./App.scss";

import { TranslationProvider } from "@nexus/src/nexusExporter";
import React from "react";

import { useCombinedStore } from "../store/combined.store";
import { Header } from "./components/organisms/Header/Header";

export const App = (): React.ReactElement => {
  const language = useCombinedStore((state) => state.language);

  // TODO
  // console.log(recipes.filter((it) => it.itemsOut.length > 1));

  return (
    <TranslationProvider language={language}>
      <Header />
    </TranslationProvider>
  );
};
