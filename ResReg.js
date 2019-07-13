import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const emailRegEx = RegExp(
  /^[a-zA-Z0-9.!#$%&*/?^_`{\}"~.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("Form invalid - Display error msg");
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "Minimum 3 characters required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 && value.length > 0
            ? "Minimum 3 characters required"
            : "";
        break;
      case "email":
        formErrors.email =
          emailRegEx.test(value) && value.length > 0
            ? ""
            : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 && value.length > 0
            ? "Minimum 6 characters required"
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Respondents Registration</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email"> email:</label>
              <input
                type="email"
                className=""
                placeholder="email@gmail.com"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className=""
                placeholder="Password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already have an account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
