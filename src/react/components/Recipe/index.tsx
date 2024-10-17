import {
  IconContainer,
  IconTokenEnum,
  roundNumber,
} from "@nexus/nexusExporter";
import React from "react";

import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { powerCalculation } from "../../../helpers/powerCalculation.helper";
import { useCombinedStore } from "../../../store/combined.store";
import type { RecipeType } from "../../../types/satisfactory/recipe";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import { ResourceBox } from "./resourceBox";
import styles from "./styles.module.scss";

type PropsType = {
  recipe: RecipeType;
};

export const Recipe = ({ recipe }: PropsType): React.JSX.Element => {
  const t = useCustomTranslations();
  const overclocking = useCombinedStore((state) => state.overclocking);

  const { cycleDuration, requiredEnergy, requiredPower } = powerCalculation({
    recipe,
    overclocking,
  });

  return (
    <div
      key={recipe.recipeName}
      className={styles.one_recipe_container}
    >
      <p className={styles.recipe_title}>
        {t(TranslationsFilesEnum.SATISFACTORY_RECIPES, recipe.recipeName)}
        {recipe.isDuplicate && (
          <span className={styles.duplicated_recipe}>Duplicate</span>
        )}
      </p>
      <div className={styles.one_recipe}>
        <div className={styles.resource_group}>
          {recipe.itemsIn.map((resource) => {
            return (
              <ResourceBox
                key={resource.itemName}
                cycleDuration={cycleDuration}
                resource={resource}
              />
            );
          })}
        </div>
        <div className={styles.arrow_container}>
          <IconContainer
            iconToken={IconTokenEnum.TriangleArrow}
            color="#ccc"
            size={14}
          />
        </div>
        <div className={styles.resource_group}>
          {recipe.itemsOut.map((resource) => {
            return (
              <ResourceBox
                key={resource.itemName}
                cycleDuration={cycleDuration}
                resource={resource}
              />
            );
          })}
        </div>
        <div className={styles.recipe_info}>
          <p>
            {t(TranslationsFilesEnum.COMMON, "producedIn")}{" "}
            <span className={styles.recipes_one_info}>
              {t(
                TranslationsFilesEnum.SATISFACTORY_BUILDING,
                recipe.craftBuildings,
              )}
            </span>
          </p>
          <p>
            {t(TranslationsFilesEnum.COMMON, "cycleDuration")}{" "}
            <span className={styles.recipes_one_info}>
              {roundNumber(cycleDuration, 1)}s
            </span>
          </p>
          <p>
            {t(TranslationsFilesEnum.COMMON, "requiredPower")}{" "}
            <span className={styles.recipes_one_info}>
              {roundNumber(requiredPower, 2)} Mw
            </span>{" "}
            {t(TranslationsFilesEnum.COMMON, "powerByBuilding")}
          </p>
          <p>
            {t(TranslationsFilesEnum.COMMON, "requiredEnergy")}{" "}
            <span className={styles.recipes_one_info}>
              {roundNumber(requiredEnergy, 2)} Mj
            </span>{" "}
            {t(TranslationsFilesEnum.COMMON, "energyPerItem")}
          </p>
        </div>
      </div>
    </div>
  );
};
