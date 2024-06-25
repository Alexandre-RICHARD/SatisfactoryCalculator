import { CookieHelper, LanguageEnum } from "@nexus/src/nexusExporter";

import { supportedLanguages } from "../../dictionnaries/supportedLanguages";
import { CookieEnum } from "../../enums/cookie.enum";

export const TranslationsStoreHelper = {
  languageInitiator: (): LanguageEnum => {
    let storedLanguage = CookieHelper.getCookie(
      CookieEnum.LANG,
    ) as LanguageEnum;
    if (!TranslationsStoreHelper.isSupportedLanguage(storedLanguage)) {
      storedLanguage = LanguageEnum.ENGLISH;
      CookieHelper.setCookie(CookieEnum.LANG, storedLanguage, 24 * 365 * 100);
    }
    return storedLanguage;
  },

  isSupportedLanguage: (language: LanguageEnum): boolean => {
    const languageFound = supportedLanguages.find(
      (supportedLanguage) => supportedLanguage === language,
    );
    return !!languageFound || false;
  },
};
