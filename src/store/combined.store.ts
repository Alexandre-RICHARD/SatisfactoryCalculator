import { create } from "zustand";

import type { StoreTypes } from "../types/store/store";
import { useTranslationStore } from "./translation.store";

export const useCombinedStore = create<StoreTypes>()((...a) => ({
  ...useTranslationStore(...a),
}));

export const { getInitialState, getState, setState, subscribe } =
  useCombinedStore;
