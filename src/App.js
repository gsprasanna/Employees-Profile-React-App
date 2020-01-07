/* Importing the required packages and components */
import React, { Component } from "react";
import "./App.css";
import fetchData from "./Services/fetchData";
import {
  GET_USERS_API,
  GET_POSTS_API,
  GET_COMMENTS_API,
  GET_ALBUMS_API,
  GET_ACTIVITIES_API,
  GET_TODO_API,
  GET_PHOTOS_API
} from "./Constants/ServerUrls";
import Login from "./Pages/LoginPage/Login";
import routes from "./routes/routes";
import { Route, withRouter } from "react-router-dom";
import ProfileDetails from "./Pages/ProfileDetails/ProfileDetails";
import PostPage from "./Pages/ProfileDetails/PostPage";
import "bootstrap/dist/css/bootstrap.min.css";
import GalleryPage from "./Pages/ProfileDetails/GalleryPage";
import TodoPage from "./Pages/ProfileDetails/TodoPage";
import PhotosPage from "./Pages/ProfileDetails/PhotosPage";

class App extends Component {
  /* Intializing the state variable */
  state = {
    usersList: [],
    userProfileName: "",
    userDetails: {},
    userPost: [],
    postComments: [],
    userAlbums: [],
    userActivity: [],
    sortedActivity: [],
    todayActivity: [],
    yesterdayActivity: [],
    earlierActivity: [],
    userTodo: [],
    completedTodo: [],
    yetToCompleteTodo: [],
    userProfileUrl: "",
    userPhotos: [],
    selectedAlbumTitle: ""
  };

  /* function triggered while mounting */
  componentDidMount() {
    const { history, location } = this.props;
    debugger;
    if (location.pathname === "/Employees-Profile-React-App/") {
      history.push(routes.login);
    } else {
      let userDetails = JSON.parse(localStorage.getItem("liveUserDetails"));
      debugger;
      this.loadUserPost(userDetails.id);
      this.loadPostComments(userDetails.id);
      this.loadActivities(userDetails.id);
      this.loadAlbums(userDetails.id);
      this.loadTodo(userDetails.id);
      this.setState({
        userDetails
      });
    }

    this.loadUserAccountList();
  }

  /* async function used to fetch the users list */
  loadUserAccountList = async () => {
    try {
      const getUsers = await fetchData(GET_USERS_API, "GET");
      const usersList = getUsers.users;
      /* set the value of state variable */
      this.setState({ usersList });
    } catch (e) {
      console.error(e);
    }
  };

  /* async function used to fetch the users post */
  loadUserPost = async id => {
    try {
      const getPost = await fetchData(GET_POSTS_API, "GET");
      const userPosts = getPost.posts;
      let filteredPost = userPosts.filter(post => post.userId === id);
      debugger;
      this.setState({ userPost: filteredPost });
    } catch (e) {
      console.error(e);
    }
  };

  /* async function used to fetch the post comments */
  loadPostComments = async id => {
    try {
      const getComments = await fetchData(GET_COMMENTS_API, "GET");
      const postComments = getComments.comments;
      let filteredComments = postComments.filter(
        comment => comment.userId === id
      );
      debugger;
      this.setState({ postComments: filteredComments });
    } catch (e) {
      console.error(e);
    }
  };

  /* async function used to fetch the albums */
  loadAlbums = async id => {
    try {
      const getAlbums = await fetchData(GET_ALBUMS_API, "GET");
      const userAlbums = getAlbums.album;
      const getPhotos = await fetchData(GET_PHOTOS_API, "GET");
      const userPhotos = getPhotos.albums;
      const filteredUserPhotos = userPhotos.filter(album => {
        return album.userId === id;
      });
      this.setState({ userAlbums, userPhotos: filteredUserPhotos });
    } catch (e) {
      console.error(e);
    }
  };

  /* async function used to fetch the activities */
  loadActivities = async id => {
    try {
      const getActivities = await fetchData(GET_ACTIVITIES_API, "GET");
      const recentActivity = getActivities.recentActivity;
      let filteredActivity = recentActivity.filter(
        activity => activity.userId === id
      );
      debugger;
      let formatActivity = filteredActivity.map(activity => {
        activity.time = activity.time.replace(/-/g, "/").replace(":", " ");
        return activity;
      });

      /* sort the activities by date time */
      let sortedActivity = formatActivity.sort(function(first, second) {
        let c = new Date(first.time);
        let d = new Date(second.time);
        return d.getTime() - c.getTime();
      });

      /* extract/filter the yesterday activity alone */
      let yesterdayActivity = sortedActivity.filter(activity => {
        let activityDate = new Date(sortedActivity.time).toLocaleDateString();
        let currentDate = new Date().toLocaleDateString();
        const diffTime = Math.abs(currentDate - activityDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays === 1;
      });

      /* extract/filter the recent i.e today activity alone */
      let todayActivity = sortedActivity.filter(activity => {
        let activityDate = new Date(sortedActivity.time).toLocaleDateString();
        let currentDate = new Date().toLocaleDateString();
        return activityDate === currentDate;
      });

      /* extract/filter the earlier activity alone */
      let earlierActivity = sortedActivity.filter(activity => {
        return (
          activity.id != todayActivity.id && activity.id != yesterdayActivity.id
        );
      });

      /* set the value of state variable */
      this.setState({
        userActivity: filteredActivity,
        sortedActivity,
        todayActivity,
        yesterdayActivity,
        earlierActivity
      });
    } catch (e) {
      console.error(e);
    }
  };

  /* async function used to fetch the albums */
  loadTodo = async id => {
    try {
      const completedTodo = [];
      const yetToCompleteTodo = [];
      const getTodo = await fetchData(GET_TODO_API, "GET");
      const userTodo = getTodo.todo;
      let filteredTodo = userTodo.filter(todo => todo.userId === id);
      debugger;
      filteredTodo.map(todo => {
        if (todo.completed === false) {
          yetToCompleteTodo.push(todo);
        } else {
          completedTodo.push(todo);
        }
      });
      this.setState({ filteredTodo, yetToCompleteTodo, completedTodo });
    } catch (e) {
      console.error(e);
    }
  };

  /* storefunction used to store required data through out the application */
  storeUserName = userAllDetails => {
    debugger;
    const details = { ...userAllDetails };
    localStorage.setItem("liveUserDetails", JSON.stringify(details));
    this.loadUserPost(details.id);
    this.loadPostComments(details.id);
    this.loadActivities(details.id);
    this.loadAlbums(details.id);
    this.loadTodo(details.id);
    this.setState({
      userProfileName: details.name,
      userDetails: details,
      userProfileUrl: details.profilepicture
    });
  };
  storeAlbumName = value => {
    debugger;
    this.setState({
      selectedAlbumTitle: value
    });
  };
  render() {
    /* de-structuring the required state variables */
    const {
      usersList,
      userPost,
      userDetails,
      userAlbums,
      userActivity,
      todayActivity,
      yesterdayActivity,
      earlierActivity,
      postComments,
      userTodo,
      completedTodo,
      yetToCompleteTodo,
      userProfileUrl,
      userPhotos,
      storeAlbumName,
      selectedAlbumTitle
    } = this.state;
    return (
      <div>
        {/* Routing declarations */}
        <Route
          exact
          path={routes.login}
          render={() => (
            <Login usersList={usersList} storeUserName={this.storeUserName} />
          )}
        />
        <Route
          exact
          path={routes.profile}
          render={props => (
            <ProfileDetails
              {...props}
              userDetails={userDetails}
              userProfileUrl={userProfileUrl}
            />
          )}
        />
        <Route
          exact
          path={routes.posts}
          render={props => (
            <PostPage
              {...props}
              userDetails={userDetails}
              postComments={postComments}
              userPost={userPost}
              userActivity={userActivity}
              todayActivity={todayActivity}
              yesterdayActivity={yesterdayActivity}
              earlierActivity={earlierActivity}
              userProfileUrl={userProfileUrl}
            />
          )}
        />
        <Route
          exact
          path={routes.gallery}
          render={props => (
            <GalleryPage
              {...props}
              userDetails={userDetails}
              userAlbums={userAlbums}
              userProfileUrl={userProfileUrl}
              userPhotos={userPhotos}
              storeAlbumName={this.storeAlbumName}
            />
          )}
        />
        <Route
          exact
          path={routes.todo}
          render={props => (
            <TodoPage
              {...props}
              userDetails={userDetails}
              userTodo={userTodo}
              completedTodo={completedTodo}
              yetToCompleteTodo={yetToCompleteTodo}
              userProfileUrl={userProfileUrl}
            />
          )}
        />
        <Route
          exact
          path={routes.albums}
          render={props => (
            <PhotosPage
              {...props}
              userDetails={userDetails}
              userPhotos={userPhotos}
              selectedAlbumTitle={selectedAlbumTitle}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
