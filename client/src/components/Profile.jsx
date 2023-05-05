import React from "react";

const Profile = () => {
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid black", marginTop: "10px" }}
          src="https://robohash.org/demo.png?size=200x200"
          alt="pic"
        />
        <h5>Demo name</h5>
        <h6>Email - abc@gmail.com</h6>
      </div>
      <h3>Your quotes</h3>
      <blockquote>
        <h6>if it works don't touch it</h6>
      </blockquote>
      <blockquote>
        <h6>if it works don't touch it</h6>
      </blockquote>
    </div>
  );
};

export default Profile;
