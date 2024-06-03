import { StateCreator } from "zustand";

import { CookieEnum } from "../enum/cookie.enum";
import { LanguageEnum } from "../enum/language.enum";
import { CookieHelper } from "../helper/cookie.helper";
import { TranslationHelper } from "../helper/translation.helper";
import type { TranslationState } from "../types/store/translations";

export const useTranslationStore: StateCreator<TranslationState> = (set) => {
  let storedLanguage = CookieHelper.getCookie(CookieEnum.LANG) as LanguageEnum;
  if (!TranslationHelper.isSupportedLanguage(storedLanguage)) {
    CookieHelper.setCookie(
      CookieEnum.LANG,
      LanguageEnum.ENGLISH,
      24 * 365 * 100,
    );
    storedLanguage = LanguageEnum.ENGLISH;
  }

  return {
    language: storedLanguage,
    setLanguage: (newLanguage) => {
      CookieHelper.setCookie(CookieEnum.LANG, newLanguage, 24 * 365 * 100);
      set(() => ({ language: newLanguage }));
    },
  };
};
