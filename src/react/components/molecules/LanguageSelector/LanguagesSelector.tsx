import {
  LabelWithIcon,
  type LanguageEnum,
  languageToCountry,
  nativeLanguageNames,
  type SelectItemsTypes,
  Selector,
  SortHelper,
  useTranslations,
} from "@nexus/src/nexusExporter";
import type React from "react";
import { useShallow } from "zustand/react/shallow";

import { supportedLanguages } from "../../../../dictionnaries/supportedLanguages";
import { TranslationsFilesEnum } from "../../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../../store/combined.store";
import { LanguageSelectorFlag } from "../../atoms/LanguageSelectorFlag/LanguageSelectorFlag";

export const LanguagesSelector = (): React.ReactElement => {
  const t = useTranslations<TranslationsFilesEnum>();

  const [language, setLanguage] = useCombinedStore(
    useShallow((state) => [state.language, state.setLanguage]),
  );

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
          <LabelWithIcon
            key={oneLanguage}
            icon={<LanguageSelectorFlag country={country} />}
            label={
              // TODO Le style est mal géré. faire une passe sur tous les styles dans le nexus
              <>
                <p>{t(TranslationsFilesEnum.LANGUAGES, oneLanguage)}</p>
                <span>({nativeLanguageNames[oneLanguage]})</span>
              </>
            }
          />
        ),
        value: oneLanguage,
      };
    });

  return (
    // TODO Rajouter un props selectedItems pour le mettre en valeur
    <Selector
      id="language"
      label={
        <LabelWithIcon
          icon={<LanguageSelectorFlag country={languageToCountry[language]} />}
          label={<p>{language.toUpperCase()}</p>}
        />
      }
      items={languagesSelectOption}
      onSelect={(item) => setLanguage(item as LanguageEnum)}
    />
  );
};
