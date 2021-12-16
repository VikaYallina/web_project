import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {

  const { user: currUser} = useSelector((state) => state.auth)

  if (!currUser) {
    return <Redirect to="/login" />;
  }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currUser.accessToken.substring(0, 20)} ...{" "}
          {currUser.accessToken.substr(currUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currUser.roles &&
            currUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );

}

export default Profile;