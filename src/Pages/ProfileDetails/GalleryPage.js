import React, { Component } from "react";
import ProfileSideBar from "../../Components/ProfileSideBar";
import Gallery from "../../Components/Gallery";
import LoadingIndicator from "../../Components/LoadingIndicator";

class GalleryPage extends Component {
  render() {
    debugger;
    const { userDetails, userAlbums } = this.props;
    return (
      <>
        <ProfileSideBar
          fullName={userDetails.name}
          profilePicture={userDetails.profilepicture}
        />
        {userAlbums.length ? (
          userAlbums.map(album => {
            return <Gallery title={album.title} />;
          })
        ) : (
          <LoadingIndicator />
        )}
      </>
    );
  }
}

export default GalleryPage;
