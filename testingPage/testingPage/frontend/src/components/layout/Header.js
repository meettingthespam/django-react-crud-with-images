import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    // links only shown to logged in users
    const loggedInLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <li className="nav-item">
          <span className="navbar-text m-auto">
            <strong>{user ? `Welcome ${user.username}` : ""}</strong>
          </span>
        </li>
        <li className="nav-item">
          <Link to="/dossiers" className="nav-link">
            Dossiers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/newDossier" className="nav-link">
            New Dossier
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/notesToSelf" className="nav-link">
            Notes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/newNote" className="nav-link">
            New Note
          </Link>
        </li>
        <li className="p-2 nav-item">
          <button onClick={this.props.logout} className="btn btn-secondary">
            Logout
          </button>
        </li>
      </ul>
    );

    // links shown to people wanting to register
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Kitchen Sink
            </a>
          </div>
          {isAuthenticated ? loggedInLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
