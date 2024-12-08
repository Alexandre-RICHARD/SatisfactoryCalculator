import "../styles/globalStyles.scss";

import {
  ThemeProvider,
  TranslationProvider,
  TranslationsContext,
} from "@nexus/nexusExporter";
import React from "react";

import { useCombinedStore } from "../store/combined.store";
import { theme } from "../styles/theme";
import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { Router } from "./Router";

export const App = (): React.JSX.Element => {
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
      <ThemeProvider theme={theme}>
        <div className={styles.app}>
          <Header />
          <div className={styles.content_container}>
            <Router />
          </div>
        </div>
      </ThemeProvider>
    </TranslationProvider>
  );
};
