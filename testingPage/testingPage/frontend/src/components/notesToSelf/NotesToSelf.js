import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotes, deleteNote } from "../../actions/notesToSelf";

export class NotesToSelf extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    getNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
  };

  // populating the Notes once the component mounts
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="container pt-4">
        <h2 className="text-center">Notes to Self</h2>
        {this.props.notes.map(note => (
          <article className="card bg-secondary mb-3" key={note.id}>
            <div className="card-body">
              <h4 className="card-title">{note.title}</h4>

              <p className="text-muted text-justify">{note.body}</p>
              <button
                className="text-right"
                onClick={this.props.deleteNote.bind(this, note.id)}
                className="btn btn-primary btn-md"
              >
                {" "}
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notesToSelf.notes
});

export default connect(
  mapStateToProps,
  { getNotes, deleteNote }
)(NotesToSelf);
