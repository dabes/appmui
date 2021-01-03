import { UPDATE_FORM_EXERCICIO, UPDATE_FORM_MES } from "./actionTypes";

export const changeExercicio = (value) => ({
  type: UPDATE_FORM_EXERCICIO,
  exercicio: value,
});

export const changeMes = (value) => ({
  type: UPDATE_FORM_MES,
  mes: value,
});
