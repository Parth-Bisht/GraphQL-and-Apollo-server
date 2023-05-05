import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MY_PROFILE } from "../gqloperations/queries";
import { useParams } from "react-router-dom";

const OtherUserProfile = () => {
const userId = useParams();
  const { data, error, loading } = useQuery(GET_MY_PROFILE);

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  if (data) console.log(data);
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid black", marginTop: "10px" }}
          src={`https://robohash.org/${data.user.first_name}.png?size=200x200`}
          alt="pic"
        />
        <h5>
          {data.user.first_name} {data.user.last_name}
        </h5>
        <h6>Email - {data.user.email}</h6>
      </div>
      <h3>Your quotes</h3>
      {data.user.quotes.map((quo, ind) => {
        return (
          <blockquote key={ind}>
            <h6>{quo.name}</h6>
          </blockquote>
        );
      })}
    </div>
  );
};

export default OtherUserProfile;
