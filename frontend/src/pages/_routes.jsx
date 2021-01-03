import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./Settings";
import ProjectsPage from "./Projects";
import CurriculoPage from "./Curriculo";
import AboutPage from "./About";
import TeamsPage from "./Teams";
import HomePage from "./Home";
import MscPage from "./Msc";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sobre/curriculo">
          <CurriculoPage />
        </Route>
        <Route path="/sobre/projects">
          <ProjectsPage />
        </Route>
        <Route path="/sobre">
          <AboutPage />
        </Route>
        <Route path="/portifolio">
          <TeamsPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/datatable">
          <MscPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
