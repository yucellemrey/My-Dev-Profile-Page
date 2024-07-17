import React from "react";
import { useSelector } from "react-redux";
import "../styles/profilePitch.css";

function ProfilePitch() {
  const profile = useSelector((state) => state.profile.profile);
  console.log(profile.birthDate);

  if (!profile || Object.keys(profile).length === 0) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return (
    <div className="profile-pitch-container">
      <h1 className="profile-pitch-header">Profile</h1>
      <div className="profile-pitch-context">
        <div>
          <h2 className="profile-pitch-titles">Profile</h2>
          <p>
            <strong>Doğum Tarihi</strong> {profile.birthDate}
          </p>
          <p>
            <strong> İkamet Şehri </strong>
            {profile.city}
          </p>
          <p>
            <strong>Eğitim Durumu</strong> {profile.education?.university},{" "}
            {profile.education?.degree}, {profile.education?.graduationYear}
          </p>
          <p>
            <strong>Tercih Ettiği Rol </strong> {profile.preferredRole}
          </p>
        </div>
        <div className="profile-pitch-about">
          <h2 className="profile-pitch-titles">About Me</h2>
          <p>{profile.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePitch;
