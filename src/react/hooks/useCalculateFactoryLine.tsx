import { useShallow } from "zustand/react/shallow";

import { factoryLineStepCalculator } from "../../helpers/factoryLineStepCalculator.helper";
import { useCombinedStore } from "../../store/combined.store";
import type { FactoryLine } from "../../types/satisfactory/factoryLine";

export const useCalculateFactoryLine = (): FactoryLine | null => {
  const [selectedFactoryLineData, setFactoryLine] = useCombinedStore(
    useShallow((state) => [
      state.selectedFactoryLineData,
      state.setFactoryLine,
    ]),
  );

  if (!selectedFactoryLineData) return null;
  const factoryLine = factoryLineStepCalculator({
    currentRecipe: selectedFactoryLineData,
  });
  setFactoryLine(factoryLine);
  return factoryLine;
};
