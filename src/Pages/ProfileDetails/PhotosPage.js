/* Importing the required packages and components */
import React, { Component } from "react";
import ProfileSideBar from "../../Components/ProfileSideBar";
import LoadingIndicator from "../../Components/LoadingIndicator";
import Photos from "../../Components/Photos";

class PhotosPage extends Component {
  state = {
    selectedAlbumId: "",
    userAlbumPhotosById: []
  };
  /* function triggered while mounting */
  componentDidMount() {
    const { match = {} } = this.props;
    debugger;
    const { params = {} } = match;
    const { albumId: selectedAlbumId = "" } = params;
    this.setState({ selectedAlbumId: selectedAlbumId });
    debugger;
    this.loadUserPhotos(selectedAlbumId);
  }
  /* function which get the photos of selected album by the user.  */
  loadUserPhotos = id => {
    try {
      debugger;
      const { userPhotos } = this.props;
      const filteredUserPhotos = userPhotos.filter(album => {
        return album.albumId === parseInt(id);
      });
      this.setState({ userAlbumPhotosById: filteredUserPhotos });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    /* destructuring the state and props */
    const { userAlbumPhotosById } = this.state;
    const { userDetails, selectedAlbumTitle } = this.props;
    return (
      <div className="row">
        {userAlbumPhotosById.length ? (
          <>
            <ProfileSideBar fullName={userDetails.name} />
            <Photos
              userAlbumPhotosById={userAlbumPhotosById}
              fullName={userDetails.name}
              profilePicture={userDetails.profilepicture}
              selectedAlbumTitle={selectedAlbumTitle}
              userEmail={userDetails.email}
            />
          </>
        ) : (
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default PhotosPage;
