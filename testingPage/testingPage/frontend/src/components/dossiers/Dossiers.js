import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDossiers, deleteDossier } from "../../actions/dossiers";

export class Dossiers extends Component {
  static propTypes = {
    dossiers: PropTypes.array.isRequired,
    getDossiers: PropTypes.func.isRequired,
    deleteDossier: PropTypes.func.isRequired
  };

  // populating the Dossiers once the component mounts
  componentDidMount() {
    this.props.getDossiers();
  }

  render() {
    return (
      <Fragment>
        <div className="container pt-4">
          <h2 className="text-center">Dossiers</h2>

          {this.props.dossiers.map(dossier => (
            <article className="card bg-secondary mb-3" key={dossier.id}>
              <div className="card-body">
                <h4 className="card-title">{dossier.name}</h4>
                <div className="text-muted text-left">
                  <p>Hobbies: {dossier.hobbies}</p>
                  <p>Job: {dossier.job}</p>
                  <p>Appearance: {dossier.appearance}</p>
                  <p>Discussions: {dossier.discussions}</p>
                </div>
                <button
                  onClick={this.props.deleteDossier.bind(this, dossier.id)}
                  className="btn btn-primary btn-sm text-right"
                >
                  {" "}
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dossiers: state.dossiers.dossiers
});

export default connect(
  mapStateToProps,
  { getDossiers, deleteDossier }
)(Dossiers);
