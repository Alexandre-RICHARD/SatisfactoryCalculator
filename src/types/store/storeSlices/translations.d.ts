import type { LanguageCodeEnum } from "@nexus/src/nexusExporter";

export type TranslationSliceType = {
  language: LanguageCodeEnum;
  setLanguage: (newLanguage: LanguageCodeEnum) => void;
};
