import React, { Component } from "react";
import ProfileSideBar from "../../Components/ProfileSideBar";
import Todo from "../../Components/Todo";

class TodoPage extends Component {
  state = {};
  render() {
    const {
      userDetails,
      userTodo,
      completedTodo,
      yetToCompleteTodo,
      userProfileUrl
    } = this.props;
    debugger;

    return (
      <div className="row">
        <ProfileSideBar />
        <Todo
          fullName={userDetails.name}
          profilePicture={userDetails.profilepicture}
          userDetails={userDetails}
          completedTodo={completedTodo}
          yetToCompleteTodo={yetToCompleteTodo}
        />
      </div>
    );
  }
}

export default TodoPage;
