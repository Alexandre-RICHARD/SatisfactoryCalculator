import "./Header.scss";

import React from "react";

import { useCombinedStore } from "../../../../store/combined.store";
import { LanguagesSelector } from "../../molecules/LanguageSelector/LanguagesSelector";

export const Header = (): React.ReactElement => {
  const language = useCombinedStore((state) => state.language);

  return (
    <header className="header">
      <h1>Satisfactory calculator</h1>
      <p>{language}</p>
      <LanguagesSelector />
    </header>
  );
};
