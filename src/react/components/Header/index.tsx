import React from "react";
import { NavLink } from "react-router-dom";

import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import { LanguagesSelector } from "../LanguageSelector";
import styles from "./styles.module.scss";

export const Header = (): React.JSX.Element => {
  const t = useCustomTranslations();

  return (
    <header className={styles.header}>
      <NavLink to="/">Satisfactory calculator</NavLink>
      <NavLink to="/recipes">
        {t(TranslationsFilesEnum.COMMON, "recipes")}
      </NavLink>
      <NavLink to="/calculator">
        {t(TranslationsFilesEnum.COMMON, "calculator")}
      </NavLink>
      <LanguagesSelector />
    </header>
  );
};
