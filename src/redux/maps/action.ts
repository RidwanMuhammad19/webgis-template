import type { LEGENDA_TYPES } from "~/types/legenda";
import { typesMaps } from "./type";

export const setLegenda = (legenda: LEGENDA_TYPES) => ({
  type: typesMaps.SET_LEGENDA,
  payload: legenda,
});
