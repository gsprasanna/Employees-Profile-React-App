/* Importing the required packages and components */
import React, { Component } from "react";
import ProfileSideBar from "../../Components/ProfileSideBar";
import Gallery from "../../Components/Gallery";
import LoadingIndicator from "../../Components/LoadingIndicator";

class GalleryPage extends Component {
  render() {
    /* destructuring the props */
    const { userDetails, userAlbums, userPhotos, storeAlbumName } = this.props;
    return (
      <div className="row">
        <ProfileSideBar fullName={userDetails.name} />

        <Gallery
          fullName={userDetails.name}
          profilePicture={userDetails.profilepicture}
          userAlbums={userAlbums}
          userPhotos={userPhotos}
          storeAlbumName={storeAlbumName}
          userEmail={userDetails.email}
        />
      </div>
    );
  }
}

export default GalleryPage;
