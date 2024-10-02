import {
  InvertHelper,
  LabelWithIcon,
  type LanguageCodeEnum,
  type LanguageEnum,
  languageToCode,
  languageToCountry,
  nativeLanguageNames,
  type SelectItemsType,
  Selector,
  SortHelper,
} from "@nexus/src/nexusExporter";
import React from "react";
import { useShallow } from "zustand/react/shallow";

import { supportedLanguages } from "../../../dictionnaries/supportedLanguages.dictionnary";
import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../store/combined.store";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import { LanguageSelectorFlag } from "../LanguageSelectorFlag";
import styles from "./styles.module.scss";

export const LanguagesSelector = (): React.JSX.Element => {
  const t = useCustomTranslations();

  const [language, setLanguage] = useCombinedStore(
    useShallow((state) => [state.language, state.setLanguage]),
  );

  const storedLanguageName = InvertHelper.getInvertObject(languageToCode)[
    language
  ] as LanguageEnum;

  const languagesSelectOption: SelectItemsType[] = supportedLanguages
    .sort((languageA, languageB) => {
      const stringA = t(TranslationsFilesEnum.LANGUAGES, languageA);
      const stringB = t(TranslationsFilesEnum.LANGUAGES, languageB);
      return SortHelper.getSortStringValue(stringA, stringB);
    })
    .map((oneLanguage) => {
      const country = languageToCountry[oneLanguage];
      const code = languageToCode[oneLanguage] as LanguageCodeEnum;

      const translatedLanguage = t(
        TranslationsFilesEnum.LANGUAGES,
        oneLanguage,
      );
      const nativeLanguageName = nativeLanguageNames[oneLanguage];
      return {
        label: (
          <LabelWithIcon
            key={oneLanguage}
            icon={<LanguageSelectorFlag country={country} />}
            label={
              <div className={styles.dropdown_language_label}>
                <p>{translatedLanguage}</p>
                {language !== code && <span>({nativeLanguageName})</span>}
              </div>
            }
            position="left"
          />
        ),
        search: `${translatedLanguage} (${nativeLanguageName})`,
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
          position="left"
        />
      }
      items={languagesSelectOption}
      selectedItem={language}
      position="bottom-left"
      onSelect={(item) => setLanguage(item as LanguageCodeEnum)}
      search={{ isHandlingCustomSearch: false }}
    />
  );
};
