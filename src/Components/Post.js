import React, { useState } from "react";
import { faShare, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import LoadingIndicator from "./LoadingIndicator";
import { Row, Image, Modal, ModalBody, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import routes from "../routes/routes";

const Post = ({
  /* destructuring the props */
  fullName,
  userEmail,
  profilePicture,
  userPost,
  earlierActivity,
  yesterdayActivity,
  todayActivity,
  postComments
}) => {
  debugger;
  /* useState used to manage the state in functional components */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /* return the post details and sidebar components */
  return (
    <div className="col-md-10">
      <Row className="topbar container">
        <div className="sidebar-title">Posts</div>
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
                <h4>{fullName}</h4>
              </div>
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
      <Row className="main-content container">
        <div className="col-md-7">
          {userPost.length ? (
            userPost.map((post, Index) => {
              return (
                <Card className="user-post-card">
                  <div className="">
                    <Image
                      src={profilePicture}
                      alt="loading"
                      className="profile-img"
                      roundedCircle
                    />
                    <span>{fullName}</span>
                  </div>
                  <div
                    className="ml-5"
                    style={{ color: "grey", fontSize: "small" }}
                  >
                    {post.time}
                  </div>
                  <div className="post-title">{post.title}</div>
                  <img className="post-img" src={post.image} alt="loading" />
                  <div className="post-body">{post.body}</div>
                  <div className="post-comment-icon">
                    <a>
                      <FontAwesomeIcon
                        icon={faCommentAlt}
                        style={{ color: "lightgrey" }}
                      />
                      <span style={{ color: "grey" }}>Comments </span>
                    </a>
                    <a>
                      <FontAwesomeIcon
                        icon={faShare}
                        style={{ color: "lightgrey" }}
                      />
                      <span style={{ color: "grey" }}>Share</span>
                    </a>
                  </div>

                  {postComments.length ? (
                    postComments.map(comments => {
                      if (comments.postId === post.id) {
                        const commentsBody = comments.body;
                        const profilePic = comments.profilePicture;
                        const commentsTime = comments.time;
                        debugger;
                        return (
                          <>
                            <div className="mt-3 pl-3">
                              <Image
                                src={profilePic}
                                alt="loading"
                                className="profile-img"
                                roundedCircle
                              />
                              <span>{fullName}</span>
                              <span
                                className="ml-2 color-text-grey"
                                style={{ fontSize: "small" }}
                              >
                                {commentsTime}
                              </span>
                              <div className="pl-5 color-text-grey">
                                {userEmail}
                              </div>
                              <div className="mt-2 pl-4">{commentsBody}</div>
                              <div
                                className="pl-4 color-text-grey"
                                style={{ cursor: "pointer" }}
                              >
                                Reply
                              </div>
                            </div>
                          </>
                        );
                      }
                    })
                  ) : (
                    <> </>
                  )}
                </Card>
              );
            })
          ) : (
            <LoadingIndicator />
          )}
        </div>
        <div className="col-md-5 card-activity">
          <div style={{ textAlign: "center" }}> Activities</div>
          {todayActivity.length ? (
            <div className="m-auto">Recent Activities</div>
          ) : (
            <> </>
          )}
          {todayActivity.length ? (
            todayActivity.map(activity => {
              return (
                <>
                  <div className="mt-3 mb-3">
                    <Image
                      src={profilePicture}
                      alt="loading"
                      className="profile-img"
                      roundedCircle
                    />{" "}
                    <span>{fullName} </span>
                    <span className="color-text-grey" style={{ width: "5vh" }}>
                      {activity.activity}{" "}
                    </span>
                    <span className="color-text-grey">
                      {activity.time.slice(10, 18)}
                    </span>
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}

          {yesterdayActivity.length ? (
            <div className="activity-title-flex">
              <hr className="hr-line-activity center-element" />
              <div className="center-element color-text-grey">Yesterday</div>
              <hr className="hr-line-activity center-element" />
            </div>
          ) : (
            <> </>
          )}
          {yesterdayActivity.length ? (
            yesterdayActivity.map(activity => {
              return (
                <>
                  <div className="mt-3 mb-3">
                    <Image
                      src={profilePicture}
                      alt="loading"
                      className="profile-img"
                      roundedCircle
                    />{" "}
                    <span>{fullName} </span>
                    <span className="color-text-grey">
                      {activity.time.slice(10, 18)}
                    </span>
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}

          <div className="activity-title-flex">
            <hr className="hr-line-activity center-element" />
            <div className="center-element color-text-grey">
              Earlier Activities{" "}
            </div>
            <hr className="hr-line-activity center-element" />
          </div>
          {earlierActivity.length ? (
            earlierActivity.map(activity => {
              let extractDay = new Date(activity.time);
              return (
                <>
                  <div className="mt-3 mb-3">
                    <Image
                      src={profilePicture}
                      alt="loading"
                      className="profile-img"
                      roundedCircle
                    />{" "}
                    <span>{fullName} </span>
                    <span className="color-text-grey" style={{ width: "5vh" }}>
                      {activity.activity}{" "}
                    </span>
                    <span className="color-text-grey ml-3">
                      {extractDay.toDateString()}
                    </span>
                    <span className="color-text-grey">
                      {activity.time.slice(10, 18)}
                    </span>
                  </div>
                </>
              );
            })
          ) : (
            <div>**** No activities ****</div>
          )}
        </div>
      </Row>
    </div>
  );
};

export default Post;
