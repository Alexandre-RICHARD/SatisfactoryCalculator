import { roundNumber } from "@nexus/nexusExporter";
import type React from "react";

import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { useCalculateFactoryLine } from "../../hooks/useCalculateFactoryLine";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import styles from "./styles.module.scss";

export const GraphContainer = (): React.JSX.Element | null => {
  const t = useCustomTranslations();
  const factoryLine = useCalculateFactoryLine();

  if (!factoryLine) return null;
  return (
    <div className={styles.graph_container}>
      <div className={styles.one_column}>
        <p className={styles.recipe}>
          {t(
            TranslationsFilesEnum.SATISFACTORY_RECIPES,
            factoryLine.recipe.recipeName,
          )}
        </p>
        <p>Quantity wanted per minute : {factoryLine.quantityPerMinute}</p>
        <p>Building number : {factoryLine.buildingNumber}</p>
        <p>Overclocking of buildings : {factoryLine.overclocking}</p>
        <p>Power required : {roundNumber(factoryLine.powerRequired, 2)}</p>
        <p>Energy required : {roundNumber(factoryLine.energyRequired, 2)}</p>
      </div>
    </div>
  );
};
