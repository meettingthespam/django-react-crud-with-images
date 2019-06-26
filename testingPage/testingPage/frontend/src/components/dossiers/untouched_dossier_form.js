import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDossier } from "../../actions/dossiers";

export class DossierForm extends Component {
  state = {
    name: "",
    hobbies: "",
    job: "",
    appearance: "",
    discussions: ""
  };

  static propTypes = {
    addDossier: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, hobbies, job, appearance, discussions } = this.state;
    const dossier = { name, hobbies, job, appearance, discussions };
    this.props.addDossier(dossier);
    this.setState({
      name: "",
      hobbies: "",
      job: "",
      appearance: "",
      discussions: ""
    });
  };

  render() {
    const { name, hobbies, job, appearance, discussions } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Dossier</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Hobbies</label>
            <input
              className="form-control"
              type="text"
              name="hobbies"
              onChange={this.onChange}
              value={hobbies}
            />
          </div>
          <div className="form-group">
            <label>Job</label>
            <textarea
              className="form-control"
              type="text"
              name="job"
              onChange={this.onChange}
              value={job}
            />
          </div>
          <div className="form-group">
            <label>Appearace</label>
            <textarea
              className="form-control"
              type="text"
              name="appearance"
              onChange={this.onChange}
              value={appearance}
            />
          </div>
          <div className="form-group">
            <label>Discussions</label>
            <textarea
              className="form-control"
              type="text"
              name="discussions"
              onChange={this.onChange}
              value={discussions}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addDossier }
)(DossierForm);
