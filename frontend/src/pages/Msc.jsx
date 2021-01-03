import React from 'react';
import DatatableApi from '../components/DatatableApi';
import {useSelector} from 'react-redux';
import {DashboardLayout} from '../components/Layout';
import Filtro from './Filtro';

const HomePage = () => {
 const exercicio = useSelector((state) => state.mscFormFiltroState.exercicio);
  const mes = useSelector((state) => state.mscFormFiltroState.mes);
  const url = `http://localhost:3000/api/stn_matriz_gerada/1/${exercicio}/${mes}`;
  const title = "Matriz de Saldos Contábeis";
  return (
    <DashboardLayout style={{ overflow: "auto" }}>
      <DatatableApi url={url} title={title} ><Filtro /></DatatableApi>
    </DashboardLayout>
  )
}

export default HomePage;

