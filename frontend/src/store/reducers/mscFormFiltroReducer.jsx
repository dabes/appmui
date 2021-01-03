import { UPDATE_FORM_EXERCICIO, UPDATE_FORM_MES } from "../actions/actionTypes";

const initialState = {
  exercicio: 2020,
  mes: 1,
};

export const mscFormFiltroReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_EXERCICIO:
      return {
        ...state,
        exercicio: action.exercicio,
      };
    case UPDATE_FORM_MES:
      return {
        ...state,
        mes: action.mes,
      };
    default:
      return state;
  }
};
