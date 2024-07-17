import type { LanguageCodeEnum } from "@nexus/src/nexusExporter";

export type TranslationSliceTypes = {
  language: LanguageCodeEnum;
  setLanguage: (newLanguage: LanguageCodeEnum) => void;
};
