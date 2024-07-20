import "./Header.scss";

import React from "react";

import { LanguagesSelector } from "../../molecules/LanguageSelector/LanguagesSelector";

export const Header = (): React.JSX.Element => {
  return (
    <header className="header">
      <h1>Satisfactory calculator</h1>
      <LanguagesSelector />
    </header>
  );
};
