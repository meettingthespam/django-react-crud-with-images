import React, { Fragment } from "react";
import DossierForm from "./DossierForm";
import Dossiers from "./Dossiers";

export default function Dashboard() {
  return (
    <Fragment>
      <DossierForm />
      <Dossiers />
    </Fragment>
  );
}
