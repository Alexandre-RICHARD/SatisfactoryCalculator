import React, { useState } from "react";

import { ImageHelper, Selector } from "../../../../nexus/src/nexusExporter";
import { recipes } from "../../../dictionnaries/recipes.dictionnary";
import styles from "./SatisfactoryCalculator.module.scss";

export const SatisfactoryCalculator = (): React.JSX.Element => {
  const [resourceSelected, setResourceSelected] = useState<string | undefined>(
    undefined,
  );

  return (
    <div className={styles.satisfactory_calculator_container}>
      <div className={`${styles.mid_screen} ${styles.graph}`}>
        <Selector
          id="satisfactory-calculator-resources-selector"
          position="top-right"
          label={resourceSelected ?? "Selectionnes ta ressource"}
          selectedItem={resourceSelected}
          items={recipes.map((recipe) => ({
            label: recipe.recipeName,
            search: recipe.recipeName,
            value: recipe.recipeName,
          }))}
          onSelect={(item) => setResourceSelected(item)}
        />
      </div>
      <div className={`${styles.mid_screen} ${styles.recipes}`}>
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.recipeName}
              className={styles.one_recipe}
            >
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
                      <p>{resourceIn.quantityPerCycle}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <p>{recipe.craftBuildings}</p>
                <p>{recipe.initCycleDuration}</p>
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
                      <p>{resourceOut.quantityPerCycle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
