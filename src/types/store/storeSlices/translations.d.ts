import type { LanguageEnum } from "@nexus/src/nexusExporter";

export type TranslationSliceTypes = {
  language: LanguageEnum;
  setLanguage: (newLanguage: LanguageEnum) => void;
};
