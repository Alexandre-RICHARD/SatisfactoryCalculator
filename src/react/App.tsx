import "./App.scss";

import {
  TranslationProvider,
  TranslationsContext,
} from "@nexus/src/nexusExporter";
import React from "react";

import { useCombinedStore } from "../store/combined.store";
import { Header } from "./components/organisms/Header/Header";

export const App = (): React.ReactElement => {
  const language = useCombinedStore((state) => state.language);

  const filesContexts = {
    ...import.meta.glob("../assets/translations/**/*.ts"),
    ...import.meta.glob("../../nexus/src/assets/translations/**/*.ts"),
  };

  return (
    <TranslationProvider
      TranslationsContext={TranslationsContext}
      filesContexts={filesContexts}
      language={language}
    >
      <Header />
    </TranslationProvider>
  );
};
