import React from "react";
import { Switch , Route } from "react-router-dom";

import DashboardHome from "../views/DashboardHome/dashboard";

export const baseUrl = "/";

export const Rutas: React.FC = () => (
  <Switch >
    <Route exact path={baseUrl} component={DashboardHome} />
    <Route exact path={baseUrl} component={DashboardHome} />
  </Switch >
);

export default Rutas;
