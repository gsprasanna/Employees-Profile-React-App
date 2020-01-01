import React from "react";
import { Row, Image } from "react-bootstrap";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { GeoMap } from "./GeoMap";

const ProfileContent = ({
  /* destructuring the props */
  fullName,
  userName,
  mailId,
  profilePicture,
  phone,
  website,
  companyName,
  catchPhrase,
  bs,
  street,
  suite,
  city,
  zipcode,
  geoDetails
}) => {
  /* return the profile page details and sidebar components */
  return (
    <div className="col-md-10">
      <Row className="topbar">
        <div className="sidebar-title">Profile</div>
        <div className="profile-icon">
          <Image
            src={profilePicture}
            alt="loading"
            className="profile-img"
            roundedCircle
          />
          <label>{fullName}</label>
        </div>
      </Row>
      <hr />
      <Row className="main-content">
        <div className="col-md-5 border-right">
          <Image
            src={profilePicture}
            style={{ width: "50%", height: "30%" }}
            alt="loading"
            className=""
            roundedCircle
          />
          <h4>{fullName}</h4>
          <table>
            <tr>
              <td>Username </td>
              <td>:</td>
              <td>{userName}</td>
            </tr>
            <tr>
              <td>e-mail </td>
              <td>:</td>
              <td>{mailId}</td>
            </tr>
            <tr>
              <td>Phone </td>
              <td>:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td>website </td>
              <td>:</td>
              <td>{website}</td>
            </tr>
          </table>
          <hr></hr>
          <table>
            <tr>
              <td>Name </td>
              <td>:</td>
              <td>{companyName}</td>
            </tr>
            <tr>
              <td>catchPhrase </td>
              <td>:</td>
              <td>{catchPhrase}</td>
            </tr>
            <tr>
              <td>bs </td>
              <td>:</td>
              <td>{bs}</td>
            </tr>
          </table>
        </div>
        <div className="col-md-7">
          Address:
          <table>
            <tr>
              <td>Street </td>
              <td>:</td>
              <td>{street}</td>
            </tr>
            <tr>
              <td>Suite </td>
              <td>:</td>
              <td>{suite}</td>
            </tr>
            <tr>
              <td>City </td>
              <td>:</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>Zipcode </td>
              <td>:</td>
              <td>{zipcode}</td>
            </tr>
          </table>
          <GeoMap />
        </div>
      </Row>
    </div>
  );
};

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDb2W29PjAOMBmPoYm1rrpX2wxKUZx664Q"
// })(ProfileContent);
export default ProfileContent;
