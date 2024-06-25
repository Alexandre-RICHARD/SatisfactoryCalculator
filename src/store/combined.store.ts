import { create } from "zustand";

import type { CombinedStoreTypes } from "../types/store/combinedStore";
import { useTranslationStore } from "./storeSlices/translation.store";

export const useCombinedStore = create<CombinedStoreTypes>()((...a) => ({
  ...useTranslationStore(...a),
}));

export const { getInitialState, getState, setState, subscribe } =
  useCombinedStore;
