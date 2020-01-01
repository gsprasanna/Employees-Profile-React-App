import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { Row, Image, Modal, ModalBody, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../routes/routes";

const Todo = ({
  fullName,
  profilePicture,
  userDetails,
  completedTodo,
  yetToCompleteTodo
}) => {
  /* useState used to manage the state in functional components */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-md-10">
        <Row className="topbar container">
          <div className="sidebar-title">ToDo</div>
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
        <Row className="main-content container mt-5">
          <div className="col-md-6 ">
            <div className="todo-title">ToDo</div>
            <div className="card-todo">
              {yetToCompleteTodo.length ? (
                yetToCompleteTodo.map(todo => {
                  return (
                    <div className="pl-3">
                      <input type="checkbox"></input>
                      <span className="pl-2" style={{ fontWeight: "bold" }}>
                        {todo.title}
                      </span>
                    </div>
                  );
                })
              ) : (
                <LoadingIndicator />
              )}
            </div>
          </div>
          <div className="col-md-5 " id="disable-todo" disabled={true}>
            <div className="todo-completed-title">
              Completed{" "}
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </div>

            <div className="card-todo-completed">
              {completedTodo.length ? (
                completedTodo.map(todo => {
                  return (
                    <div className="pl-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="checked-todo"
                        disabled
                      ></input>
                      <span className="pl-2 color-text-grey">{todo.title}</span>
                    </div>
                  );
                })
              ) : (
                <LoadingIndicator />
              )}
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Todo;
