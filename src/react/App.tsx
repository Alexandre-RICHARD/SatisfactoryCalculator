import "./App.scss";

import React from "react";

import { TranslationsGroup } from "../enum/translationsGroup.enum";
import { Header } from "./components/organisms/Header/Header";
import { useTranslations } from "./hook/useTranslations";

export const App: React.FC = () => {
  const t = useTranslations();

  // console.log(recipes.filter((it) => it.itemsOut.length > 1));

  return (
    <>
      <Header />
      <p>{t(TranslationsGroup.COMMON, "selectLanguage")}</p>
    </>
  );
};
