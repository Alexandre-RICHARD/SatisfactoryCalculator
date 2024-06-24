import type { LanguageEnum } from "../../enums/language.enum";

export type TranslationState = {
  language: LanguageEnum;
  setLanguage: (newLanguage: LanguageEnum) => void;
};
