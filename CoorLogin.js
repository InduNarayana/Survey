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
class CoorLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      company_id: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        company_id: ""
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
        Company-ID: ${this.state.company_id}
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
      case "company_id":
        formErrors.company_id =
          value.length < 3 && value.length > 0 ? "Not a valid ID" : "";
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
          <h1>Survey Coordinator Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="company_id">
              <label htmlFor="company_id">Company-ID:</label>
              <input
                type="text"
                className=""
                placeholder="company-id"
                name="company_id"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email"> E-mail:</label>
              <input
                type="email"
                className=""
                placeholder="email@gmail.com"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
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
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CoorLogin;
