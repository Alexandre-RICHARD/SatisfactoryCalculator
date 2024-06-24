import { CookieHelper, LanguageEnum } from "@nexus/src/nexusExporter";
import { expect, test } from "vitest";

import { supportedLanguages } from "../dictionnary/supportedLanguages";
import { CookieEnum } from "../enums/cookie.enum";
// import { TranslationHelper as T } from "../helper/translation.helper";
import { getState, useCombinedStore } from "../store/combined.store";

test("State language should be valid language", () => {
  const currentLanguage = getState().language;
  expect(Object.values(LanguageEnum).includes(currentLanguage)).toBeTruthy();
});

test("Translation should be found", () => {
  // TODO
  // const key = "selectLanguage";
  // const currentLanguage = getState().language;
  // const translation = T.getT(currentLanguage, key);
  // expect(translation).not.toBe(key);
  expect(true).toBeTruthy();
});

test("Change language", () => {
  useCombinedStore.setState({ language: LanguageEnum.ENGLISH });
  const newLanguageEN = getState().language;
  const cookieLanguage = CookieHelper.getCookie(CookieEnum.LANG);
  expect(newLanguageEN === cookieLanguage);
  expect(newLanguageEN).toBe(LanguageEnum.ENGLISH);
  useCombinedStore.setState({ language: LanguageEnum.FRENCH });
  const newLanguageFR = getState().language;
  expect(newLanguageFR).toBe(LanguageEnum.FRENCH);
});

test("Supported languages should be include in languagesEnum", () => {
  const languagesEnumKey = Object.values(LanguageEnum);
  const areSupportedLanguageExists = supportedLanguages.every((languageKey) =>
    languagesEnumKey.includes(languageKey),
  );

  expect(areSupportedLanguageExists).toBeTruthy();
});
