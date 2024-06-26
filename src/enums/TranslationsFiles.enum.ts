// TODO Comprendre pourquoi le @ ne fonctionne pas
import { ReservedTranslationsFiles } from "../../nexus/src/nexusExporter";

enum LocalTranslationsFiles {
  COMMON = "common",
}

export const TranslationsFilesEnum = {
  ...LocalTranslationsFiles,
  ...ReservedTranslationsFiles,
};

export type TranslationsFilesTypes =
  | LocalTranslationsFiles
  | ReservedTranslationsFiles;
