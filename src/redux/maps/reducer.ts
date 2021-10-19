import type { LEGENDA_TYPES } from "~/types/legenda";
import { typesMaps } from "./type";

const INITIAL_MAPS_STATE = {
  legenda: [],
};

type INITIAL_MAPS_STATE_TYPE = {
  legenda: Array<LEGENDA_TYPES>;
};

type ReducerActionType = { type: string; payload: {} | string };

const mapsReducers = (
  state: INITIAL_MAPS_STATE_TYPE = INITIAL_MAPS_STATE,
  action: ReducerActionType
) => {
  switch (action.type) {
    case typesMaps.SET_LEGENDA:
      return state;

    default:
      return state;
  }
};
