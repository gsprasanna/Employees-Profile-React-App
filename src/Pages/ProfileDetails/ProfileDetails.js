/* Importing the required packages and components */
import React, { Component } from "react";
import ProfileSideBar from "../../Components/ProfileSideBar";
import routes from "../../routes/routes";
import { Route } from "react-router-dom";
import Post from "../../Components/Post";
import ProfileContent from "../../Components/ProfileContent";
import LoadingIndicator from "../../Components/LoadingIndicator";

class ProfileDetails extends Component {
  state = {
    fullName: ""
  };
  componentDidMount() {
    const { match = {} } = this.props;
    const { params = {} } = match;
    const { user: fullName = "" } = params;
    debugger;
    this.setState({ fullName });
  }
  render() {
    debugger;
    /* destructuring the state and props */
    const { fullName } = this.state;
    const { userDetails } = this.props;
    return (
      <div className="row">
        {Object.keys(userDetails).length === 0 &&
        userDetails.constructor === Object ? (
          <LoadingIndicator />
        ) : (
          <>
            <ProfileSideBar
              fullName={userDetails.name}
              profilePicture={userDetails.profilepicture}
            />
            <ProfileContent
              fullName={userDetails.name}
              userName={userDetails.username}
              mailId={userDetails.email}
              profilePicture={userDetails.profilepicture}
              phone={userDetails.phone}
              website={userDetails.website}
              companyName={userDetails.company.name}
              catchPhrase={userDetails.company.catchPhrase}
              bs={userDetails.company.bs}
              street={userDetails.address.street}
              suite={userDetails.address.suite}
              city={userDetails.address.city}
              zipcode={userDetails.address.zipcode}
              geoDetails={userDetails.address.geo}
            />{" "}
          </>
        )}
      </div>
    );
  }
}

export default ProfileDetails;
