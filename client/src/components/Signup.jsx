import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIGNUP_USER } from "../gqloperations/mutations";

const Signup = () => {
  const [form, setForm] = useState({});
  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);
  if (loading) return <h1>Loading</h1>;
  const handleChange = (e) => {
    const input = e.target.name;
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser({
      variables: {
        userNew: form,
      },
    });
    console.log(form);
  };
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && data.user && (
        <div className="green card-panel">
          {data.user.first_name} is SignedUp. You can login now
        </div>
      )}
      <h5>Signup!!</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <Link to="/login">
          <p>Already have an account?</p>
        </Link>
        <button className="btn #1565c0 blue darken-3" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
