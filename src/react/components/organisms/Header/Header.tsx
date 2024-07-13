import "./Header.scss";

import React from "react";

import { TranslationsFilesEnum } from "../../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../../store/combined.store";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import { LanguagesSelector } from "../../molecules/LanguageSelector/LanguagesSelector";

export const Header = (): React.ReactElement => {
  const t = useCustomTranslations();

  const language = useCombinedStore((state) => state.language);

  return (
    <header className="header">
      <h1>Satisfactory calculator</h1>
      <p>{language}</p>
      <p style={{ color: "white" }}>
        {t(TranslationsFilesEnum.COMMON, "exemple")}
      </p>
      <LanguagesSelector />
    </header>
  );
};
