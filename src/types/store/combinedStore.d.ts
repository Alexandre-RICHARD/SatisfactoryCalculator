import type { CalculatorSliceType } from "./storeSlices/calculator";
import type { TranslationSliceType } from "./storeSlices/translations";

export type CombinedStoreType = TranslationSliceType & CalculatorSliceType;
