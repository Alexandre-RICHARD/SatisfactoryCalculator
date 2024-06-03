import "./Header.scss";

import React from "react";
import { useShallow } from "zustand/react/shallow";

import type { LanguageEnum } from "../../../../enums/language.enum";
import { TranslationsFiles } from "../../../../enums/TranslationsFiles.enum";
import { useCombinedStore } from "../../../../store/combined.store";
import { useTranslations } from "../../../hooks/useTranslations";
import { Selector } from "../../molecules/Selector/Selector";

export const Header = (): React.ReactElement => {
  const [language, setLanguage] = useCombinedStore(
    useShallow((state) => [state.language, state.setLanguage]),
  );

  // TODO AJouter un tableau croisé pour les langues supportés afin de les propsoer en traductions
  const languaged = [
    { label: "Francais", value: "fr" },
    { label: "Anglais", value: "en" },
  ];

  const t = useTranslations();

  return (
    <header className="header">
      <h1>Satisfactory calculator</h1>
      <Selector
        id="language"
        items={languaged}
        onSelect={(item) => setLanguage(item as LanguageEnum)}
      />
      <p>{t(TranslationsFiles.COMMON, "selectLanguage")}</p>
      <p>{language}</p>
    </header>
  );
};
