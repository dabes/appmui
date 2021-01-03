import React, { useEffect, useState } from "react";
import {
  MDBDataTableV5,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import SectionContainer from "../components/SectionContainer";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const DatatableApi = (props) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(props.url)
      .then((data) => {
        setState(data.data);
        setLoading(false);
      })
      .catch((err) => console.log("No connection to api: ", err));
  }, [props.url]);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <SectionContainer header={props.title} noBorder flexCenter>
            <MDBCard >
              <MDBCardBody className="card">
                {props.children}
                {loading ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <CircularProgress size={80} thickness={2} />
                  </div>
                ) : (
                  <MDBDataTableV5
                    hover
                    striped
                    entriesOptions={[10, 25, 50]}
                    entries={10}
                    pagesAmount={4}
                    searchTop
                    searchBottom={false}
                    data={state}
                    fullPagination
                    materialSearch
                    responsive
                    small
                    autoWidth
                    noRecordsFoundLabel={"Nenhum registro encontrado"}
                    entriesLabel={"Numero de Registros"}
                    infoLabel={["Mostrando", "de", "do total de", "registros"]}
                    paginationLabel={["Anterior", "Proxima"]}
                    searchLabel={"Buscar"}
                    className="DataTableApi"
                  />
                )}
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default DatatableApi;
