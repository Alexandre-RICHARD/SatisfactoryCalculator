import {
  CookieHelper,
  TranslationsStoreHelper,
} from "@nexus/src/nexusExporter";
import type { StateCreator } from "zustand";

import { supportedLanguages } from "../../dictionnaries/supportedLanguages";
import { CookieEnum } from "../../enums/cookie.enum";
import type { TranslationSliceTypes } from "../../types/store/storeSlices/translations";

export const useTranslationStore: StateCreator<TranslationSliceTypes> = (
  set,
) => ({
  language: TranslationsStoreHelper.languageInitiator(supportedLanguages),
  setLanguage: (newLanguage) => {
    CookieHelper.setCookie(CookieEnum.LANG, newLanguage, 24 * 365 * 100);
    set(() => ({ language: newLanguage }));
  },
});
