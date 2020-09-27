import React from "react";

const ProfileImg = ({ user }) => {
  return (
    <div className="profile-img">
      <img src={user.avatar_url} alt={user.name} />
    </div>
  );
};

export default ProfileImg;
