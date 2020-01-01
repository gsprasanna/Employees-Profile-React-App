import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import { Row, Col, Image } from "react-bootstrap";

const ProfileSideBar = ({
  /* destructuring the props */
  fullName,
  profilePicture
}) => {
  try {
    /* return the side bar component */
    return (
      <div className="col-md-2 sidebar">
        <NavLink
          to={routes.profile.replace(":user", fullName)}
          className="border-bottom"
        >
          Profile
        </NavLink>
        <NavLink to={routes.posts} className="border-bottom">
          Posts
        </NavLink>
        <NavLink to={routes.gallery} className="border-bottom">
          Gallery
        </NavLink>
        <NavLink to={routes.todo} className="border-bottom">
          TODO
        </NavLink>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
};

ProfileSideBar.propTypes = {
  fullName: PropTypes.string.isRequired
};

export default ProfileSideBar;

{
  /* <Col md={10} className="topbar">
          <div className="sidebar-title">Profile</div>
          <div className="profile-icon">
            <Image
              src={profilePicture}
              alt="loading"
              className="profile-img"
              roundedCircle
            />
            <label>{userName}</label>
          </div>
        </Col> */
}
