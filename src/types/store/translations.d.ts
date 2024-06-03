import type { LanguageEnum } from "../../enum/language.enum";

export interface TranslationState {
  language: LanguageEnum;
  setLanguage: (newLanguage: LanguageEnum) => void;
}
