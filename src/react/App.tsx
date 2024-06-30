import "./App.scss";

import { TranslationProvider } from "@nexus/src/nexusExporter";
import React from "react";

import type { TranslationsFilesEnum } from "../enums/translationsFiles.enum";
import { useCombinedStore } from "../store/combined.store";
import { Header } from "./components/organisms/Header/Header";

export const App = (): React.ReactElement => {
  const language = useCombinedStore((state) => state.language);

  const filesContexts = {
    ...import.meta.glob(`../assets/translations/**/*.ts`),
    ...import.meta.glob(`../../nexus/src/assets/translations/**/*.ts`),
  };

  // TODO
  // console.log(recipes.filter((it) => it.itemsOut.length > 1));

  return (
    <TranslationProvider<TranslationsFilesEnum>
      filesContexts={filesContexts}
      language={language}
    >
      <Header />
    </TranslationProvider>
  );
};
