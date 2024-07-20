import { create } from "zustand";

import type { CombinedStoreType } from "../types/store/combinedStore";
import { useTranslationStore } from "./storeSlices/translation.store";

export const useCombinedStore = create<CombinedStoreType>()((...a) => ({
  ...useTranslationStore(...a),
}));

export const { getInitialState, getState, setState, subscribe } =
  useCombinedStore;
