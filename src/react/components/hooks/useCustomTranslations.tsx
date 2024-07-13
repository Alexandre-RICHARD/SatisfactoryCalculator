import { useTranslations } from "@nexus/src/nexusExporter";

import type { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";

export const useCustomTranslations = () => {
  const Nt = useTranslations();

  const t = (files: TranslationsFilesEnum, key: string) => {
    const myTranslations = Nt(files as string, key);

    return myTranslations;
  };

  return t;
};
