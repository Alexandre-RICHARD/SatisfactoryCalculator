import { CookieHelper } from "@nexus/src/nexusExporter";
import type { StateCreator } from "zustand";

import { CookieEnum } from "../../enums/cookie.enum";
import { TranslationsStoreHelper } from "../../helpers/store/translations.store.helper";
import type { TranslationSliceTypes } from "../../types/store/storeSlices/translations";

export const useTranslationStore: StateCreator<TranslationSliceTypes> = (
  set,
) => ({
  language: TranslationsStoreHelper.languageInitiator(),
  setLanguage: (newLanguage) => {
    CookieHelper.setCookie(CookieEnum.LANG, newLanguage, 24 * 365 * 100);
    set(() => ({ language: newLanguage }));
  },
});
