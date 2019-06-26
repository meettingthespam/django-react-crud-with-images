import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGalleryImages } from "../../actions/gallery_images.js";

export class Gallery extends Component {
  static propTypes = {
    gallery_images: PropTypes.array.isRequired,
    getGalleryImages: PropTypes.func.isRequired
  };

  // rendering the gallery images once the component mounts
  componentDidMount() {
    this.props.getGalleryImages();
  }

  render() {
    return (
      <Fragment>
        <div className="container pt-4">
          {this.props.gallery_images.map(image => (
            <div>
              <p>Title {image.title}</p>
              <p>{image.description}</p>
              <img src={image.image} alt={image.title} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gallery_images: state.gallery_reducer.gallery_images
});

export default connect(
  mapStateToProps,
  { getGalleryImages }
)(Gallery);
