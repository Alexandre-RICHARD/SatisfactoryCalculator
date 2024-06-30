import {
  DropdownItemWithIcon,
  ImageHelper,
  type LanguageEnum,
  languageToCountry,
  nativeLanguageNames,
  type SelectItemsTypes,
  Selector,
  SortHelper,
  useTranslations,
} from "@nexus/src/nexusExporter";
import type React from "react";

import { supportedLanguages } from "../../../../dictionnaries/supportedLanguages";
import { TranslationsFilesEnum } from "../../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../../store/combined.store";

export const LanguagesSelector = (): React.ReactElement => {
  const t = useTranslations<TranslationsFilesEnum>();

  const setLanguage = useCombinedStore((state) => state.setLanguage);

  const languagesSelectOption: SelectItemsTypes[] = supportedLanguages
    .sort((languageA, languageB) => {
      const stringA = t(TranslationsFilesEnum.LANGUAGES, languageA);
      const stringB = t(TranslationsFilesEnum.LANGUAGES, languageB);
      return SortHelper.getSortStringValue(stringA, stringB);
    })
    .map((oneLanguage) => {
      const country = languageToCountry[oneLanguage];
      return {
        label: (
          <DropdownItemWithIcon
            icon={
              <img
                alt={`Country flag of ${country}`}
                src={ImageHelper.dynamicImageImporter(
                  `languagesFlags/${country}.png`,
                )}
              />
            }
            label={
              // TODO Le style est mal géré. faire une passe sur tous les styles dans le nexus
              <>
                <p>{t(TranslationsFilesEnum.LANGUAGES, oneLanguage)}</p>
                <span>({nativeLanguageNames[oneLanguage]})</span>
              </>
            }
            key={oneLanguage}
          />
        ),
        value: oneLanguage,
      };
    });

  return (
    // TODO Rajouter un props selectedItems pour le mettre en valeur
    <Selector
      id="language"
      items={languagesSelectOption}
      onSelect={(item) => setLanguage(item as LanguageEnum)}
    />
  );
};
