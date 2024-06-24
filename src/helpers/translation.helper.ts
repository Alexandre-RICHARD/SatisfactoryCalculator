import type { LanguageEnum } from "@nexus/src/nexusExporter";

import type { TranslationsFiles } from "../enums/TranslationsFiles.enum";
import type { Translations, TranslationsObject } from "../types/translations";

export const TranslationHelper = {
  getTranslationsFiles: async (
    language: LanguageEnum,
  ): Promise<Translations> => {
    const translationsFiles = {} as Translations;

    const filesContexts = import.meta.glob(`../assets/translations/**/*.ts`);
    await Promise.all(
      Object.entries(filesContexts).map(async ([filePath]) => {
        if (language === (filePath.split("/")[3] as LanguageEnum)) {
          try {
            const file = (await filesContexts[filePath]()) as {
              default: TranslationsObject;
            };
            const fileName = filePath.match(/\/([^/]+)\.ts$/);
            if (fileName?.[1]) {
              translationsFiles[fileName[1] as TranslationsFiles] =
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
