import type { LanguageEnum } from "@nexus/src/nexusExporter";

export type TranslationState = {
  language: LanguageEnum;
  setLanguage: (newLanguage: LanguageEnum) => void;
};
