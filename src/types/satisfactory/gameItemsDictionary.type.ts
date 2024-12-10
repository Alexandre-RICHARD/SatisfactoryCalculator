import type { GameItemsEnum } from "../../enums/gameItems.enum";
import type { GameItems } from "./gameItems/gameItems.type";

export type GameItemsDictionnary = Record<GameItemsEnum, GameItems>;
