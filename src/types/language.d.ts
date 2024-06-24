import type { LanguageEnum } from "../enums/language.enum";

export type SupportedLanguagesTypes = {
  key: LanguageEnum;
  countryFlag: string;
  isSupported: boolean;
};
