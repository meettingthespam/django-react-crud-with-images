import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-oldschool-dark";

import Header from "./layout/Header";
import Dashboard from "./dossiers/Dashboard";

// individual pages
import HomePage from "./homePage/HomePage";
import Gallery from "./gallery/Gallery";
import Dossiers from "./dossiers/Dossiers";
import DossierForm from "./dossiers/DossierForm";
import NotesToSelf from "./notesToSelf/NotesToSelf";
import NotesToSelfForm from "./notesToSelf/NotesToSelfForm";

import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={HomePage} />

                  <PrivateRoute exact path="/dossiers" component={Dossiers} />

                  <PrivateRoute
                    exact
                    path="/newDossier"
                    component={DossierForm}
                  />
                  <PrivateRoute
                    exact
                    path="/notestoself"
                    component={NotesToSelf}
                  />
                  <PrivateRoute
                    exact
                    path="/newNote"
                    component={NotesToSelfForm}
                  />
                  <Route exact path="/gallery" component={Gallery} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
