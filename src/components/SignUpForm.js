import React, { useState } from "react";
import Input from "./Input";
import "./SignUpForm.css";

export default function SignUpForm() {
  const [showErrors, setShowErrors] = useState(false);
  const [fname, setFname] = useState({
    value: "",
    error: "First Name cannot be empty!",
  });
  const [lname, setLname] = useState({
    value: "",
    error: "Last Name cannot be empty!",
  });
  const [email, setEmail] = useState({
    value: "",
    error: "Email cannot be empty!",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "Password cannot be empty!",
  });
  const [confirmedPassword, setConfirmedPassword] = useState({
    value: "",
    error: "Confirmed password cannot be empty!",
  });

  const handleFnameChange = (newValue) => {
    let newError = "";
    if (/^[a-zA-Z]*$/.test(newValue)) {
      if (newValue.length === 0) newError = "First Name cannot be empty!";
      else if (newValue.length < 3 || newValue.length > 20)
        newError = "Must be between 3-20 characters!";
      else newError = "";
      setFname({ error: newError, value: newValue });
    }
  };

  const handleLnameChange = (newValue) => {
    let newError = "";
    if (/^[a-zA-Z]*$/.test(newValue)) {
      if (newValue.length === 0) newError = "Last Name cannot be empty!";
      else if (newValue.length < 3 || newValue.length > 20)
        newError = "Must be between 3-20 characters!";
      else newError = "";
      setLname({ error: newError, value: newValue });
    }
  };

  const handleEmailChange = (newValue) => {
    let newError = "";
    if (newValue.length === 0) newError = "Email cannot be empty!";
    else if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(newValue)) {
      newError = "Invalid Email format!";
    } else newError = "";
    setEmail({ error: newError, value: newValue });
  };

  const handlePasswordChange = (newValue) => {
    // contains atleast 1 number, 1 special char, and bw 8 to 16 characters in total
    let newError = "";
    if (newValue.length === 0) newError = "Password cannot be empty!";
    else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(newValue)
    ) {
      newError =
        "Password must contain a number, a special char, and between 8-16 characters in total!";
    } else newError = "";
    setPassword({ error: newError, value: newValue });
  };

  const handleConfirmPasswordChange = (newValue) => {
    let newError = "";
    if (newValue.length === 0) newError = "Confirmed password cannot be empty!";
    else if (newValue !== password.value) {
      newError = "Passwords don't match!";
    } else newError = "";
    setConfirmedPassword({ error: newError, value: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowErrors(true);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="form-heading">Sign Up Form</h1>
      <div className="form-container">
        <Input
          type="text"
          label="First name"
          value={fname.value}
          error={fname.error}
          showErrors={showErrors}
          handleChange={handleFnameChange}
        />
        <Input
          type="text"
          label="Last name"
          value={lname.value}
          error={lname.error}
          showErrors={showErrors}
          handleChange={handleLnameChange}
        />
        <Input
          type="email"
          label="Email"
          value={email.value}
          error={email.error}
          showErrors={showErrors}
          handleChange={handleEmailChange}
        />
        <Input
          type="text"
          label="Password"
          value={password.value}
          error={password.error}
          showErrors={showErrors}
          handleChange={handlePasswordChange}
        />
        <Input
          type="text"
          label="Confirm Password"
          value={confirmedPassword.value}
          error={confirmedPassword.error}
          showErrors={showErrors}
          handleChange={handleConfirmPasswordChange}
        />
      </div>
      <button className="btn" type="submit">
        Sign Up
      </button>
    </form>
  );
}
