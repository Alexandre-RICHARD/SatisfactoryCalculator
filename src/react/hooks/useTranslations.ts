import { useContext } from "react";

import type { TranslationsFilesTypes } from "../../enums/translationsFiles.enum";
import { TranslationsContext } from "../contexts/Translations.context";

export const useTranslations = () => {
  const translations = useContext(TranslationsContext);
  // TODO Mettre un objet de param
  const t = (files: TranslationsFilesTypes, key: string): string => {
    if (translations[files]?.[key]) return translations[files][key];
    return "";
  };

  return t;
};
