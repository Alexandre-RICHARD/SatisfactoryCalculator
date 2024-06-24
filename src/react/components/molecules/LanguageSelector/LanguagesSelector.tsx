import {
  DropdownItemWithIcon,
  ImageHelper,
  type LanguageEnum,
  languageToCountry,
  nativeLanguageNames,
  type SelectItems,
  Selector,
} from "@nexus/src/nexusExporter";
import type React from "react";

import { supportedLanguages } from "../../../../dictionnary/supportedLanguages";
import { TranslationsFiles } from "../../../../enums/TranslationsFiles.enum";
import { useCombinedStore } from "../../../../store/combined.store";
import { useTranslations } from "../../../hooks/useTranslations";

export const LanguagesSelector = (): React.ReactElement => {
  const t = useTranslations();

  const setLanguage = useCombinedStore((state) => state.setLanguage);

  const languagesSelectOption: SelectItems[] = supportedLanguages
    .sort((languageA, languageB) => {
      const stringA = t(TranslationsFiles.LANGUAGES, languageA);
      const stringB = t(TranslationsFiles.LANGUAGES, languageB);
      if (stringA < stringB) {
        return -1;
      }
      if (stringA > stringB) {
        return 1;
      }
      return 0;
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
              <>
                <p>{t(TranslationsFiles.LANGUAGES, oneLanguage)}</p>
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
