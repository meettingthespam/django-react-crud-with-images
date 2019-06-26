import React, { Component, Fragment } from "react";
import ReactBnbGallery from "react-bnb-gallery";

const subcaption = "Built with VGG16 and Pytorch, trained on Google Colab";
const photos = [
  {
    photo:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/face_melting.jpg",
    caption: "Skyline is metling",
    subcaption: subcaption,
    thumbnail:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/face_melting.jpg"
  },
  {
    photo:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/downtown_is_a_dream.jpg",
    caption: "Indianapolis around REM o'clock",
    subcaption: subcaption,
    thumbnail:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/thumbnail_downtown_is_a_dream.jpg"
  },
  {
    photo:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/skyview_is_so_70s.jpg",
    caption: "Skyline during a hot summer of the 70s ",
    subcaption: subcaption,
    thumbnail:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/thumbnail_skyview_is_so_70s..jpg"
  },
  {
    photo:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/downtown_is_melting.jpg",
    caption: "Downtown is melting",
    subcaption: subcaption,
    thumbnail:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/thumbnail_downtown_is_melting..jpg"
  },
  {
    photo:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/foggy_acid_dream.jpg",
    caption: "Skyline as an water color",
    subcaption: subcaption,
    thumbnail:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/thumbnail_foggy_acid_dream..jpg"
  },
  {
    photo:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/500_cotton_candy.jpg",
    caption: "Indy 500 from the perspective of a Snake Pit patron",
    subcaption: subcaption,
    thumbnail:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/thumbnail_500_cotton_candy..jpg"
  },
  {
    photo:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/downtown_hurts_my_head.jpg",
    caption: "Downtown Indianapolis",
    subcaption: subcaption,
    thumbnail:
      "https://raw.githubusercontent.com/punctuationmarks/ML_Transfer_Images/master/thumbnail_downtown_hurts_my_head.jpg"
  }
];

class HomePage extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render() {
    return (
      <div className="container mt-4 pt-4">
        <h1>About this project: </h1>
        <p>
          Just a proof of concept of pulling together React for front end, Redux
          for managing state in React and Django handling the backend and
          database. Also allows users to use tokens for authentication and
          automatic logging in. It handles multiple apps in Django, so it has
          mutliple API connections to React. It has the ability to take some
          quick notes, dossiers, and display images. Once users register, they
          can see only their notes keeping the app private. The notes and
          dossiers are saved to a SQLite database, the images are hosted on
          Github.
        </p>

        <section>
          <p>
            {" "}
            Here is a gallery of some images of Indianapolis that have been
            trasnformed with machine learning by using style transfer with the
            VGG16 model and Pytorch. The gallery is built with Air BNB's React
            extension.
          </p>

          <button className="btn btn-secondary" onClick={this.toggleGallery}>
            Open Style Transfer Gallery
          </button>
          <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={photos}
            onClose={this.toggleGallery}
          />
        </section>
      </div>
    );
  }
}

export default HomePage;
