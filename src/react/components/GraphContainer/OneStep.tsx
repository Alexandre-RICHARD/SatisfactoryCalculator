import { roundNumber } from "@nexus/nexusExporter";
import type React from "react";

import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import type { FactoryLine } from "../../../types/satisfactory/factoryLine";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import styles from "./styles.module.scss";

type PropsType = {
  stepData: FactoryLine;
};

export const OneStep = ({ stepData }: PropsType): React.JSX.Element | null => {
  const t = useCustomTranslations();

  return (
    <div className={styles.one_step}>
      <p className={styles.recipe_name}>
        {roundNumber(stepData.quantityPerMinute, 2)}
      </p>
      <p>
        {roundNumber(stepData.powerRequired * stepData.buildingNumber, 1)}
        {" Mw | "}
        {roundNumber(stepData.energyRequired, 1)}
        {" Mj "}
        {t(TranslationsFilesEnum.COMMON, "energyPerItem")}
      </p>
    </div>
  );
};
