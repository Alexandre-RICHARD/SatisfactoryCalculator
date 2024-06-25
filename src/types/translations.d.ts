import type { TranslationsFilesTypes } from "../enums/translationsFiles.enum";

export type TranslationsObject = Record<string, string>;
export type Translations = Record<TranslationsFilesTypes, TranslationsObject>;
