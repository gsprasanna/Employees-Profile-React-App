import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import { Image } from "react-bootstrap";

const UserAccountList = ({
  /* destructuring the props */
  name,
  id,
  userIndex,
  storeUserName,
  userAllDetails
}) => {
  try {
    /* return the user list  */
    return (
      <>
        <div className="profile-icon  border-bottom">
          <Image
            src={userAllDetails.profilepicture}
            alt="loading"
            className="profile-img"
            roundedCircle
          />

          <NavLink
            className="user-account-list"
            to={routes.profile.replace(":user", name)}
            id={id}
            key={userIndex}
            onClick={() => storeUserName(userAllDetails)}
          >
            {name}
          </NavLink>
        </div>
      </>
    );
  } catch (e) {
    console.error(e);
  }
};

UserAccountList.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserAccountList;
