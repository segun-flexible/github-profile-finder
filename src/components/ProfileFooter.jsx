import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileFooter = ({ user }) => {
  return (
    <div className="social-info">
      <div className="" title="Followers">
        <span>
          <FontAwesomeIcon icon="users" />
        </span>{" "}
        <span>{user.followers}</span>
      </div>
      <div className="" title="Following">
        <span>
          <FontAwesomeIcon icon="user" />
        </span>{" "}
        <span>{user.following}</span>
      </div>
      <div className="" title="Respositries">
        <span>
          <FontAwesomeIcon icon="book" />
        </span>{" "}
        <span>{user.public_repos}</span>
      </div>
    </div>
  );
};

export default ProfileFooter;
