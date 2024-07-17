import "./LanguagesSelector.scss";

import {
  InvertHelper,
  LabelWithIcon,
  type LanguageCodeEnum,
  type LanguageEnum,
  languageToCode,
  languageToCountry,
  nativeLanguageNames,
  type SelectItemsTypes,
  Selector,
  SortHelper,
} from "@nexus/src/nexusExporter";
import type React from "react";
import { useShallow } from "zustand/react/shallow";

import { supportedLanguages } from "../../../../dictionnaries/supportedLanguages.dictionnary";
import { TranslationsFilesEnum } from "../../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../../store/combined.store";
import { LanguageSelectorFlag } from "../../atoms/LanguageSelectorFlag/LanguageSelectorFlag";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";

export const LanguagesSelector = (): React.ReactElement => {
  const t = useCustomTranslations();

  const [language, setLanguage] = useCombinedStore(
    useShallow((state) => [state.language, state.setLanguage]),
  );

  const storedLanguageName = InvertHelper.getInvertObject(languageToCode)[
    language
  ] as LanguageEnum;

  const languagesSelectOption: SelectItemsTypes[] = supportedLanguages
    .sort((languageA, languageB) => {
      const stringA = t(TranslationsFilesEnum.LANGUAGES, languageA);
      const stringB = t(TranslationsFilesEnum.LANGUAGES, languageB);
      return SortHelper.getSortStringValue(stringA, stringB);
    })
    .map((oneLanguage) => {
      const country = languageToCountry[oneLanguage];
      const code = languageToCode[oneLanguage] as LanguageCodeEnum;
      return {
        label: (
          <LabelWithIcon
            key={oneLanguage}
            icon={<LanguageSelectorFlag country={country} />}
            label={
              <div className="dropdown-language-label">
                <p>{t(TranslationsFilesEnum.LANGUAGES, oneLanguage)}</p>
                {language !== code && (
                  <span>({nativeLanguageNames[oneLanguage]})</span>
                )}
              </div>
            }
          />
        ),
        value: code,
      };
    });

  return (
    <Selector
      id="language"
      label={
        <LabelWithIcon
          icon={
            <LanguageSelectorFlag
              country={languageToCountry[storedLanguageName]}
            />
          }
          label={<p>{language.toUpperCase()}</p>}
        />
      }
      items={languagesSelectOption}
      selectedItem={language}
      position="bottom-left"
      onSelect={(item) => setLanguage(item as LanguageCodeEnum)}
    />
  );
};
