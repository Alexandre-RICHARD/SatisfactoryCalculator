import type { TranslationsGroup } from "../enum/translationsGroup.enum";

export type TranslationFile = Record<string, string>;
export type Translations = Record<TranslationsGroup, TranslationFile>;
