import React from "react";
import { useShallow } from "zustand/react/shallow";

import {
  IconContainer,
  IconTokenEnum,
  ImageHelper,
} from "../../../../nexus/src/nexusExporter";
import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../store/combined.store";
import type { RecipesType } from "../../../types/satisfactory/recipes";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import styles from "./styles.module.scss";

type PropsType = {
  recipe: RecipesType;
};

export const Recipe = ({ recipe }: PropsType): React.JSX.Element => {
  const t = useCustomTranslations();
  const [minuteCalculation] = useCombinedStore(
    useShallow((state) => [state.minuteCalculation]),
  );

  type GetItemCountType = {
    cycleDuration: number;
    cycleItemCount: number;
  };

  const getItemCount = ({
    cycleDuration,
    cycleItemCount,
  }: GetItemCountType) => {
    if (!minuteCalculation) return cycleItemCount;
    return parseFloat(((60 / cycleDuration) * cycleItemCount).toFixed(4));
  };

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
          {recipe.itemsIn.map((resourceIn) => {
            return (
              <div
                key={resourceIn.itemName}
                className={styles.resource_in_out}
              >
                <img
                  className={styles.resource_icon}
                  alt={`Icon of ${resourceIn.itemName} satisfactory resource`}
                  src={ImageHelper.dynamicImageImporter(
                    `satisfactoryIcons/${resourceIn.itemName}.png`,
                  )}
                />
                <p className={styles.resource_count}>
                  {getItemCount({
                    cycleDuration: recipe.initCycleDuration,
                    cycleItemCount: resourceIn.quantityPerCycle,
                  })}
                </p>
              </div>
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
          {recipe.itemsOut.map((resourceOut) => {
            return (
              <div
                key={resourceOut.itemName}
                className={styles.resource_in_out}
              >
                <img
                  className={styles.resource_icon}
                  alt={`Icon of ${resourceOut.itemName} satisfactory resource`}
                  src={ImageHelper.dynamicImageImporter(
                    `satisfactoryIcons/${resourceOut.itemName}.png`,
                  )}
                />
                <p className={styles.resource_count}>
                  {getItemCount({
                    cycleDuration: recipe.initCycleDuration,
                    cycleItemCount: resourceOut.quantityPerCycle,
                  })}
                </p>
              </div>
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
              {recipe.initCycleDuration}s
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
