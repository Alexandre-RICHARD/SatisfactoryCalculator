import { useCallback, useEffect } from "react";

import { factoryLineStepCalculator } from "../../helpers/factoryLineStepCalculator.helper";
import type { FactoryLine } from "../../types/satisfactory/factoryLine";
import type { SelectedFactoryLineData } from "../../types/satisfactory/selectedFactoryLineData";

type PropsType = {
  selectedFactoryLineData?: SelectedFactoryLineData;
  setFactoryLine: (newValue: FactoryLine) => void;
};

export const useCalculateFactoryLine = ({
  selectedFactoryLineData,
  setFactoryLine,
}: PropsType) => {
  const getFactoryLine = useCallback(() => {
    if (!selectedFactoryLineData) return null;
    return factoryLineStepCalculator({
      currentRecipe: selectedFactoryLineData,
    });
  }, [selectedFactoryLineData]);

  useEffect(() => {
    const factoryLine = getFactoryLine();
    if (factoryLine) {
      setFactoryLine(factoryLine);
    }
  }, [getFactoryLine, setFactoryLine]);
};
