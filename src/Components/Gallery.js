import React, { useState } from "react";
import { Card, Row, Image, CardDeck, Modal, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import routes from "../routes/routes";
import LoadingIndicator from "./LoadingIndicator";

const Gallery = ({
  userAlbums,
  profilePicture,
  fullName,
  userPhotos,
  storeAlbumName,
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
      <label>
        <NavLink to={routes.gallery} className="album-header">
          Albums
        </NavLink>
      </label>
      <Row className="main-content container">
        <div className="col-md-12">
          <CardDeck className="ml-3">
            {userAlbums.length ? (
              userAlbums.map(album => {
                const filteredPhotos = userPhotos.filter(photo => {
                  return photo.albumId === album.id;
                });
                debugger;
                if (filteredPhotos.length) {
                  return (
                    <NavLink
                      className="album-nav"
                      to={routes.albums.replace(":albumId", album.id)}
                      onClick={() => storeAlbumName(album.title)}
                    >
                      <Card className="mb-3 album-align">
                        <div className="thumbnail-align">
                          {filteredPhotos.map((photo, index) => {
                            debugger;
                            if (index === 0) {
                              return (
                                <Card.Img
                                  src={photo.url}
                                  className="gallery-thumbnail-icon thumbnail-angle1"
                                ></Card.Img>
                              );
                            } else if (index === 1) {
                              return (
                                <Card.Img
                                  src={photo.url}
                                  className="gallery-thumbnail-icon thumbnail-angle2"
                                ></Card.Img>
                              );
                            } else if (index === 2) {
                              return (
                                <Card.Img
                                  src={photo.url}
                                  className="gallery-thumbnail-icon thumbnail-angle3"
                                ></Card.Img>
                              );
                            } else if (index === 3) {
                              return (
                                <Card.Img
                                  src={photo.url}
                                  className="gallery-thumbnail-icon thumbnail-angle4"
                                ></Card.Img>
                              );
                            } else {
                              return;
                            }
                          })}
                        </div>
                        <Card.Body className="album-title">
                          <Card.Title className="mb-0" id={album.id}>
                            {album.title}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </NavLink>
                  );
                }
              })
            ) : (
              <LoadingIndicator />
            )}
          </CardDeck>
        </div>
      </Row>
    </div>
  );
};

export default Gallery;
