import { dynamicImageImporter, roundNumber } from "@nexus/src/nexusExporter";
import React from "react";
import { useShallow } from "zustand/react/shallow";

import { useCombinedStore } from "../../../store/combined.store";
import type { ItemsInOutType } from "../../../types/satisfactory/itemsInOut";
import styles from "./styles.module.scss";

type Props = {
  resource: ItemsInOutType;
  cycleDuration: number;
};

export const ResourceBox = ({
  resource,
  cycleDuration,
}: Props): React.JSX.Element => {
  const [minuteCalculation] = useCombinedStore(
    useShallow((state) => [state.minuteCalculation]),
  );

  const getItemCount = (cycleItemCount: number) => {
    if (!minuteCalculation) return cycleItemCount;
    return roundNumber((60 / cycleDuration) * cycleItemCount, 2);
  };

  return (
    <div
      key={resource.itemName}
      className={styles.resource_in_out}
    >
      <img
        className={styles.resource_icon}
        alt={`Icon of ${resource.itemName} satisfactory resource`}
        src={dynamicImageImporter(`satisfactoryIcons/${resource.itemName}.png`)}
      />
      <p className={styles.resource_count}>
        {getItemCount(resource.quantityPerCycle)}
      </p>
    </div>
  );
};
