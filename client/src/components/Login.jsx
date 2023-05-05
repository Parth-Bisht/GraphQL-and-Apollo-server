import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../gqloperations/mutations";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", JSON.stringify(data.user.token));
      navigate("/");
    },
  });
  if (loading) return <h1>Loading</h1>;
  // if (data) {
  //   localStorage.setItem("token", JSON.stringify(data.user.token));
  //   navigate("/");
  // }
  const handleChange = (e) => {
    const input = e.target.name;
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      variables: {
        userSignin: form,
      },
    });
  };
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      <h5>Login!!</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
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
        <Link to="/signup">
          <p>Don't have an account?</p>
        </Link>
        <button className="btn #1565c0 blue darken-3" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
