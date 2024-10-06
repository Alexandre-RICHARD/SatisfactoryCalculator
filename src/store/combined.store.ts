import { create } from "zustand";

import type { CombinedStoreType } from "../types/store/combinedStore";
import { useCalculatorStore } from "./storeSlices/calculator.store";
import { useTranslationStore } from "./storeSlices/translation.store";

export const useCombinedStore = create<CombinedStoreType>()((...a) => ({
  ...useCalculatorStore(...a),
  ...useTranslationStore(...a),
}));

export const { getInitialState, getState, setState, subscribe } =
  useCombinedStore;
