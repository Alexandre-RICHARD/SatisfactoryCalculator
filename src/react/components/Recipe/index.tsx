import React from "react";
import { useShallow } from "zustand/react/shallow";

import {
  IconContainer,
  IconTokenEnum,
  roundNumberHelper,
} from "../../../../nexus/src/nexusExporter";
import { buildings } from "../../../dictionnaries/buildings.dictionnary";
import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../store/combined.store";
import type { RecipesType } from "../../../types/satisfactory/recipes";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import { ResourceBox } from "./resourceBox";
import styles from "./styles.module.scss";

type PropsType = {
  recipe: RecipesType;
};

export const Recipe = ({ recipe }: PropsType): React.JSX.Element => {
  const t = useCustomTranslations();
  const [overclocking] = useCombinedStore(
    useShallow((state) => [state.overclocking]),
  );

  const cycleDuration = recipe.initCycleDuration / (overclocking / 100);
  const powerNeeded =
    buildings[recipe.craftBuildings].consumption *
    (overclocking / 100) ** 1.321928;

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
              {roundNumberHelper(cycleDuration, 1)}s
            </span>
          </p>
          <p>
            {t(TranslationsFilesEnum.COMMON, "requiredPower")}{" "}
            <span className={styles.recipes_one_info}>
              {roundNumberHelper(powerNeeded, 2)} Mw
            </span>
          </p>
          <p>
            {t(TranslationsFilesEnum.COMMON, "requiredEnergy")}{" "}
            <span className={styles.recipes_one_info}>
              {roundNumberHelper(powerNeeded * cycleDuration, 2)} Mj
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
