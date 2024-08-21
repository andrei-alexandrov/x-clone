// import { HiDotsHorizontal } from "react-icons/hi";

import "./Profile.scss";

const Profile = ({ session }: any) => {
  console.log("Session in Profile", session);
  return (
    <div className="profile-container">
      <img
        className="profile-img"
        src={
          session.user.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttE9sxpEu1EoZgU2lUF_HtygNLCaz2rZYHg&s"
        }
        alt="user-image"
      />
      <div className="profile-details">
        <h4 className="profile-name">{session.user.name}</h4>
        <p className="profile-userName">@{session.user.username}</p>
      </div>
      {/* <HiDotsHorizontal className="profile-dots" /> */}
    </div>
  );
};

export default Profile;
