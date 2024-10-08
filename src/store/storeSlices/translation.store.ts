import {
  LanguageEnum,
  selectedLanguageInitiator,
  setCookie,
} from "@nexus/src/nexusExporter";
import type { StateCreator } from "zustand";

import { supportedLanguages } from "../../dictionnaries/supportedLanguages.dictionnary";
import { CookieEnum } from "../../enums/cookie.enum";
import type { TranslationSliceType } from "../../types/store/storeSlices/translations";

export const useTranslationStore: StateCreator<TranslationSliceType> = (
  set,
) => ({
  language: selectedLanguageInitiator(
    supportedLanguages,
    CookieEnum.LANG,
    LanguageEnum.FRENCH,
  ),
  setLanguage: (newLanguageCode) => {
    setCookie(CookieEnum.LANG, newLanguageCode, 24 * 365 * 100);
    set(() => ({ language: newLanguageCode }));
  },
});
