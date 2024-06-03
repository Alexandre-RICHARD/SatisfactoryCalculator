import { supportedLanguages } from "../assets/resources/supportedLanguages";
import type { LanguageEnum } from "../enum/language.enum";
import type { TranslationsGroup } from "../enum/translationsGroup.enum";
import type { TranslationFile, Translations } from "../types/translations";

export const TranslationHelper = {
  getTranslationsFiles: async (
    language: LanguageEnum,
  ): Promise<Translations> => {
    const translationsFiles = {} as Translations;

    const filesContexts = import.meta.glob(`../assets/translation/**/*.ts`);
    await Promise.all(
      Object.entries(filesContexts).map(async ([filePath]) => {
        if (language === (filePath.split("/")[3] as LanguageEnum)) {
          try {
            const file = (await filesContexts[filePath]()) as {
              default: TranslationFile;
            };
            const fileName = filePath.match(/\/([^/]+)\.ts$/);
            if (fileName?.[1]) {
              translationsFiles[fileName[1] as TranslationsGroup] =
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

  isSupportedLanguage: (language: LanguageEnum): boolean => {
    const languageFound = supportedLanguages.find((it) => it.key === language);
    return languageFound?.isSupported ?? false;
  },
};
