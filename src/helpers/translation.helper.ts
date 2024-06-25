import { languageCode, type LanguageEnum } from "@nexus/src/nexusExporter";

import type { TranslationsFilesTypes } from "../enums/translationsFiles.enum";
import type { Translations, TranslationsObject } from "../types/translations";

export const TranslationHelper = {
  getTranslationsFiles: async (
    language: LanguageEnum,
  ): Promise<Translations> => {
    const translationsFiles = {} as Translations;

    const filesContexts = {
      ...import.meta.glob(`../assets/translations/**/*.ts`),
      ...import.meta.glob(`../../nexus/src/assets/translations/**/*.ts`),
    };
    await Promise.all(
      Object.entries(filesContexts).map(async ([filePath]) => {
        const currentLanguageCode = languageCode[language];
        const pathSplitted = filePath.split("/");
        const filePathLanguage = pathSplitted[pathSplitted.length - 2];

        if (currentLanguageCode === filePathLanguage) {
          try {
            const file = (await filesContexts[filePath]()) as {
              default: TranslationsObject;
            };
            const fileName = filePath.match(/\/([^/]+)\.ts$/);
            if (fileName?.[1]) {
              translationsFiles[fileName[1] as TranslationsFilesTypes] =
                file.default;
            } else {
              throw new Error(
                "Unable to access file path to extract file name",
              );
            }
          } catch (error) {
            console.error(error);
          }
        }
      }),
    );
    return translationsFiles;
  },
};
