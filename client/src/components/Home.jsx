import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ALL_QUOTES } from "../gqloperations/queries";

const Home = () => {
  const {loading,error,data} = useQuery(GET_ALL_QUOTES);
  // useEffect(() => {
  //   fetch("http://localhost:4000", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `
  //       query getAllQuotes{
  //         quotes{
  //           name
  //           by{
  //             _id
  //             first_name
  //           }
  //         }
  //       }
  //       `,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="container">
      <blockquote>
        <h6>if it works don't touch it</h6>
        <p className="right-align">~ram</p>
      </blockquote>
      <blockquote>
        <h6>if it works don't touch it</h6>
        <p className="right-align">~ram</p>
      </blockquote>
    </div>
  );
};

export default Home;
