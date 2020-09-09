import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import ImageUpload from "../components/SignupForm/ImageUpload";
import { Form, InputGroup } from "../components/LoginForm/";

const signupStyles = {
  maxWidth: "20rem",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

function Signup() {
  const [formState, setFormState] = useState({
    restaurant_name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    tableCount: 0,
    company_logo: "",
  });

  const { isLoggedIn, login } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (formState.password !== formState.passwordConfirm) {
      alert("password must match");
    } else {
      API.signUpUser(
        formState.restaurant_name,
        formState.email,
        formState.password,
        formState.tableCount
      )
        .then((res) => {
          // once the user has signed up
          login(formState.email, formState.password)
          // navigate to the qrcode
          .then(() => history.push("/qrcodes"))
          .catch((err) => {
            alert(err.response.data.message);
          });
        })
        .catch((err) => alert(err));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div style={signupStyles} className="Signup">
      <h1>Sign Up</h1>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup
          id="restaurant_name"
          labelText="Restaurant Name"
          placeholder="Your Cafe"
          name="restaurant_name"
          type="text"
          onChange={handleChange}
        />
        <InputGroup
          id="email"
          labelText="Email"
          placeholder="jon.snow@email.com"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <InputGroup
          id="pwd"
          labelText="Password"
          placeholder="p@ssw0Rd!"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <InputGroup
          id="pwdconfirm"
          labelText="Confirm Password"
          placeholder="p@ssw0Rd!"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
        />
        <InputGroup
          id="tableCount"
          labelText="Table Count"
          placeholder="10"
          name="tableCount"
          type="text"
          onChange={handleChange}
        />
        {/* <ImageUpload id="logo" labelText="Logo (Optional)" name="logo" /> */}
        <button type="submit">Submit</button>
      </Form>
      <Link
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
        }}
        to="/login"
      >
        Already a member? Login
      </Link>
    </div>
  );
}

export default Signup;
