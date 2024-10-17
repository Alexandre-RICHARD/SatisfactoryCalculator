import { useTranslations } from "@nexus/nexusExporter";

import type { TranslationsFilesEnum } from "../../enums/translationsFiles.enum";

export const useCustomTranslations = () => {
  const Nt = useTranslations();

  // Todo, implémenter la logique d'une traductions ici
  const t = (files: TranslationsFilesEnum, key: string) => {
    const myTranslations = Nt(files as string, key);
    return myTranslations;
  };

  return t;
};
