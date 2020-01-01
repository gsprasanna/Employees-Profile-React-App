import React, { Component } from "react";
import ProfileSideBar from "../../Components/ProfileSideBar";
import Gallery from "../../Components/Gallery";
import LoadingIndicator from "../../Components/LoadingIndicator";

class GalleryPage extends Component {
  render() {
    debugger;
    const { userDetails, userAlbums } = this.props;
    return (
      <div className="row">
        <ProfileSideBar />

        <Gallery
          fullName={userDetails.name}
          profilePicture={userDetails.profilepicture}
          userAlbums={userAlbums}
        />
      </div>
    );
  }
}

export default GalleryPage;
