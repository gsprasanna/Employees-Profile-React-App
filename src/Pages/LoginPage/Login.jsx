/* Importing the required packages and components */
import React, { Component } from "react";
import LoadingIndicator from "../../Components/LoadingIndicator";
import UserAccountList from "../../Components/UserAccountList";

class Login extends Component {
  state = {};
  render() {
    /* de structuring the props */
    const { usersList, storeUserName } = this.props;
    return (
      <div className="App-header">
        <div className="m-auto modal-center">
          <div className="account-title">Select an account</div>
          <div className="user-list">
            {usersList ? (
              usersList.map((user, userIndex) => {
                return (
                  <UserAccountList
                    name={user.name}
                    id={user.id}
                    key={userIndex}
                    storeUserName={storeUserName}
                    userAllDetails={user}
                  />
                );
              })
            ) : (
              <LoadingIndicator />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
