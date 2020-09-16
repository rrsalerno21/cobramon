import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the home page
      .then(() => history.push("/"))
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="background-image">
    <h1 className="title-text"> project cobra </h1>
    <div className="form">
      <h1>Login</h1>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup
          id="email"
          labelText="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup
          id="password"
          labelText="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </Form>
      <Link
        className="member"
        to="/signup"
      >
        Not registered? <span>Create an Account</span>
      </Link>
    </div>
    </div>
  );
}

export default Login;