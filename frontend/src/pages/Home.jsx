import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {DashboardLayout} from '../components/Layout';
// import profileImg from "../assets/img/profile.jpeg";
import {profile} from "../assets/img/profile.js";

const HomePage = () => {
  console.log(profile)
  return (
    <DashboardLayout>
      <MDBCol >
      <div className="container">
        <MDBCard  >
        <div class="card-up info-color-dark card-top card-box border-radius-top"></div>
          <MDBCardImage waves={false} className="rounded-circle img-responsive card-stack-top card-box" src={profile} style={{width:230, cursor:"default"}} />
          <MDBCardBody>
            <MDBCardTitle><font className="font-light-blue">const </font> name = "Daniel Vieira Dabés";</MDBCardTitle>
            <hr className='hr-dark' />
            <MDBCardText>
              <h4><font className="font-light-blue">const</font> <font className="font-black-color">titulo =</font> "Breve Historia";</h4>
              <font className="font-light-blue">let </font> <font className="font-black-color">historia = </font>
              "Iniciando na computação ainda jovem como gerente noturno num lan-house no qual fui incubido de dar suporte aos usuários.
              Após este período entrei para TWTInfo como suporte de nível I, ajudando no suporte dos usuários, ao qual ganhou experiencia em 
              troubleshooting e sistemas operacionais, crescendo na empresa até a saída como Analista de Suporte I. Entretando gostando de programar
              saí em busca de conhecimento sobre PHP e outras linguagens. Mais tarde entrei para GTI como Analista de Sistemas I, onde fiquei responsável
              como os bancos de dados, sistemas (PHP), criação de novas tecnologias internas (Python, Soap, integrações), criando diversas ferramentas para
              melhorar a produtividade de diversas áreas. Criando um sistema de atualização remota dinâmica, coletor de informações dos clientes, ferramenta de
              suporte e controle de informações para o suporte ao cliente e programadores.";
            </MDBCardText>
            <MDBBtn color="primary" href="/sobre/curriculo">Conheça mais no curriculo</MDBBtn>
            <MDBBtn href="/portifolio">ou no Portifolio</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBCol>
    </DashboardLayout>
  )
}

export default HomePage;