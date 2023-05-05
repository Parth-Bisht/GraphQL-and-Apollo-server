import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ALL_QUOTES } from "../gqloperations/queries";
import { Link } from "react-router-dom";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
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
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  if (data.quotes.length === 0) return <h2>No Quotes Available</h2>;
  return (
    <div className="container">
      {data.quotes.map((quote, ind) => {
        return (
          <blockquote key={ind}>
            <h6>{quote.name}</h6>
            <Link to={`/profile/${quote.by._id}`}>
              <p className="right-align">~{quote.by.first_name}</p>
            </Link>
          </blockquote>
        );
      })}
    </div>
  );
};

export default Home;
