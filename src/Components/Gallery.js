import React from "react";
import { Card, Row, Image, CardDeck } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import LoadingIndicator from "./LoadingIndicator";

const Gallery = ({ userAlbums, profilePicture, fullName }) => {
  return (
    <div className="col-md-10">
      <Row className="topbar container">
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
      <Row className="main-content container">
        <div className="col-md-12">
          <CardDeck>
            {userAlbums.length ? (
              userAlbums.map(album => {
                return (
                  <NavLink
                    className=""
                    to={routes.albums.replace(":albumId", album.id)}
                  >
                    <Card className="mb-3">
                      <Card.Img src="holder.js/100px180"></Card.Img>
                      <Card.Body>
                        <Card.Title id={album.id}>{album.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </NavLink>
                );
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
