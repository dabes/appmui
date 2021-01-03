import { mscFormFiltroReducer } from "./mscFormFiltroReducer";
import { combineReducers } from "redux";
export const Reducers = combineReducers({
  mscFormFiltroState: mscFormFiltroReducer,
});
