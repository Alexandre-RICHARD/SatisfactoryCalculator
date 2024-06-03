import { useContext } from "react";

import type { TranslationsGroup } from "../../enum/translationsGroup.enum";
import { TranslationsContext } from "../contexts/Translations.context";

export const useTranslations = () => {
  const translations = useContext(TranslationsContext);
  const t = (group: TranslationsGroup, key: string): string => {
    if (translations[group]?.[key]) return translations[group][key];
    return "";
  };

  return t;
};
