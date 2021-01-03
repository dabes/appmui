import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  UPDATE_FORM_EXERCICIO,
  UPDATE_FORM_MES,
} from "../store/actions/actionTypes";
import {MDBBtn, MDBInput } from 'mdbreact';

function Filtro() {
  const dispatch = useDispatch();
  const exercicio = useSelector((state) => state.mscFormFiltroState.exercicio);
  const mes = useSelector((state) => state.mscFormFiltroState.mes);

  const [state,setState] = useState({
    exercicio : exercicio,
    mes : mes
  })

  return (
    <form className="FilterForm" style={{minWidth: "20%", maxWidth: "30%", marginBottom:"30px"}}>
      <div style={{display:"flex"}}>
        <section class="section-preview" style={{float:"left"}}>
          <p className="h5 text-center mb-0">Filtros</p>
          <div className="col-md-6" style={{float:"left"}}>
            <MDBInput 
              name="exercicio"
              type="number"
              label="Exercicio"
              onChange={(val) => setState({exercicio: val.target.value, mes: state.mes})}
              valueDefault={state.exercicio} />
          </div>
          <div className="col-md-6" style={{float:"left"}}>
            <MDBInput 
              name="mes"
              type="number"
              label="Mês"
              onChange={(val) => setState({exercicio:state.exercicio, mes: val.target.value})}
              valueDefault={state.mes} />
            </div>
            <MDBBtn 
              onClick={() => 
              {
                dispatch({
                  type: UPDATE_FORM_EXERCICIO,
                  exercicio: state.exercicio,})
                  dispatch({
                    type: UPDATE_FORM_MES,
                    mes: state.mes,})
              }}>Filtrar</MDBBtn>
              <div style={{minWidth: "400px"}}></div>
        </section>
      </div>
    </form>
  );
}

export default Filtro;
