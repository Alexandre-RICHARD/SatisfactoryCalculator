import "./LanguagesSelector.scss";

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
  const t = useTranslations();

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
              <div className="dropdown-language-label">
                <p>{t(TranslationsFilesEnum.LANGUAGES, oneLanguage)}</p>
                {language !== oneLanguage && (
                  <span>({nativeLanguageNames[oneLanguage]})</span>
                )}
              </div>
            }
          />
        ),
        value: oneLanguage,
      };
    });

  return (
    <Selector
      id="language"
      label={
        <LabelWithIcon
          icon={<LanguageSelectorFlag country={languageToCountry[language]} />}
          label={<p>{language.toUpperCase()}</p>}
        />
      }
      items={languagesSelectOption}
      selectedItem={language}
      position="bottom-left"
      onSelect={(item) => setLanguage(item as LanguageEnum)}
    />
  );
};
