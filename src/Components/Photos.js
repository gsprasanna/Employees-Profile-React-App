import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Card, Row, Image, CardDeck, Modal, Button } from "react-bootstrap";
import routes from "../routes/routes";
import LoadingIndicator from "./LoadingIndicator";

const Photos = ({
  userAlbumPhotosById,
  profilePicture,
  fullName,
  selectedAlbumTitle,
  userEmail
}) => {
  debugger;
  /* useState used to manage the state in functional components */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-md-10">
      <Row className="topbar container">
        <div className="sidebar-title">Gallery</div>
        <div className="profile-icon">
          <Link className="user-account-list" onClick={handleShow}>
            <Image
              src={profilePicture}
              alt="loading"
              className="profile-img"
              roundedCircle
            />
            <label>{fullName}</label>
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
              <label className="tbl-key-color">{userEmail}</label>
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
      <label className="album-header">
        <NavLink to={routes.gallery} className="photos-breadcrumb">
          Albums
        </NavLink>{" "}
        > {selectedAlbumTitle}
      </label>
      <Row className="main-content container">
        <div className="ml-3 row col-md-12">
          {userAlbumPhotosById.length ? (
            userAlbumPhotosById.map(photo => {
              debugger;
              return (
                <Card className="mb-3 col-md-3 photo-grid">
                  <Card.Img
                    src={photo.url}
                    height="200px"
                    width="250px!important"
                  ></Card.Img>
                </Card>
              );
            })
          ) : (
            <LoadingIndicator />
          )}
        </div>
      </Row>
    </div>
  );
};

export default Photos;
