import React, { useState } from "react";
import { Row, Image, Modal, ModalBody, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { GeoMap } from "./GeoMap";
import routes from "../routes/routes";

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
  /* useState used to manage the state in functional components */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-md-10">
      <Row className="topbar container">
        <div className="sidebar-title">Profile</div>
        <div className="profile-icon">
          <Link className="user-account-list" onClick={handleShow}>
            <Image
              src={profilePicture}
              alt="loading"
              className="profile-img"
              roundedCircle
            />
            <label className="user-profile-name">{fullName}</label>
          </Link>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Body>
              <div>
                <Image
                  src={profilePicture}
                  style={{ width: "50%", height: "25%" }}
                  alt="loading"
                  className=""
                  roundedCircle
                />
              </div>
              <label>{fullName}</label>
              <br />
              <label className="tbl-key-color">{mailId}</label>
              <hr />
            </Modal.Body>
            <Modal.Footer>
              <NavLink to={routes.login} className="m-auto">
                <Button variant="danger">Sign Out</Button>
              </NavLink>
            </Modal.Footer>
          </Modal>
        </div>
      </Row>
      <hr />
      <Row className="main-content containter">
        <div className="col-md-5 border-right App">
          <div>
            <Image
              src={profilePicture}
              style={{ width: "50%", height: "25%" }}
              alt="loading"
              className=""
              roundedCircle
            />
            <h4>{fullName}</h4>
          </div>
          <table className="ml-5">
            <tr>
              <td className="tbl-key-color">Username </td>
              <td>:</td>
              <td className="tbl-value-color">{userName}</td>
            </tr>
            <tr>
              <td className="tbl-key-color">e-mail </td>
              <td>:</td>
              <td className="tbl-value-color">{mailId}</td>
            </tr>
            <tr>
              <td className="tbl-key-color">Phone </td>
              <td>:</td>
              <td className="tbl-value-color">{phone}</td>
            </tr>
            <tr>
              <td className="tbl-key-color">website </td>
              <td>:</td>
              <td className="tbl-value-color">{website}</td>
            </tr>
          </table>

          <hr></hr>
          <div className="tbl-key-color">Company</div>
          <table className="ml-5">
            <tr>
              <td className="tbl-key-color">Name </td>
              <td>:</td>
              <td className="tbl-value-color">{companyName}</td>
            </tr>
            <tr>
              <td className="tbl-key-color">catchPhrase </td>
              <td>:</td>
              <td className="tbl-value-color">{catchPhrase}</td>
            </tr>
            <tr>
              <td className="tbl-key-color">bs </td>
              <td>:</td>
              <td className="tbl-value-color">{bs}</td>
            </tr>
          </table>
        </div>
        <div className="col-md-7">
          Address:
          <table className="ml-3">
            <tr>
              <td className="tbl-key-color">Street </td>
              <td>:</td>
              <td className="tbl-value-color">{street}</td>
            </tr>
            <tr>
              <td className="tbl-key-color">Suite </td>
              <td>:</td>
              <td className="tbl-value-color">{suite}</td>
            </tr>
            <tr>
              <td className="tbl-key-color">City </td>
              <td>:</td>
              <td className="tbl-value-color">{city}</td>
            </tr>
            <tr>
              <td className="tbl-key-color">Zipcode </td>
              <td>:</td>
              <td className="tbl-value-color">{zipcode}</td>
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
