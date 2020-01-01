/* Importing the required packages and components */
import React, { Component } from "react";
import ProfileSideBar from "../../Components/ProfileSideBar";
import Post from "../../Components/Post";
import LoadingIndicator from "../../Components/LoadingIndicator";

class PostPage extends Component {
  state = {};
  componentDidMount() {}
  render() {
    /* de structuring the props */
    const {
      userDetails,
      userPost,
      userActivity,
      todayActivity,
      yesterdayActivity,
      earlierActivity,
      postComments
    } = this.props;
    return (
      <div className="row">
        {Object.keys(userDetails).length === 0 &&
        userDetails.constructor === Object ? (
          <LoadingIndicator />
        ) : (
          <>
            <ProfileSideBar
              fullName={userDetails.name}
              profilePicture={userDetails.profilepicture}
            />
            <Post
              fullName={userDetails.name}
              profilePicture={userDetails.profilepicture}
              userEmail={userDetails.email}
              userPost={userPost}
              userActivity={userActivity}
              todayActivity={todayActivity}
              yesterdayActivity={yesterdayActivity}
              earlierActivity={earlierActivity}
              postComments={postComments}
            />
          </>
        )}
      </div>
    );
  }
}

export default PostPage;
