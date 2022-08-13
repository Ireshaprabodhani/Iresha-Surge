import React, { useState } from "react";
import "./RegisterScreen.css";
import MainScreen from "../../components/MainScreen";
import { Button, Form } from "react-bootstrap";
import "./RegisterScreen.css";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
//import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/UserActions";
import { useEffect } from "react";
//const axios = require("axios").default;

const RegisterScreen = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [accountType, setAccountType] = useState("");
  const [status, setStatus] = useState("");

  //if user enter wrong details
  const [password, setPassword] = useState("");
  //const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(
      register(
        firstName,
        lastName,
        password,
        email,
        mobile,
        status,
        accountType,
        dateOfBirth
      )
    );
  };
  return (
    <MainScreen title="REGISTER">
      Register
      <div div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              placeholder="Enter First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              placeholder="Enter Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="string"
              value={mobile}
              placeholder="Enter Mobile Number"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="date"
              value={dateOfBirth}
              placeholder="Enter Birth Of Date"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Staus</Form.Label>
            <Form.Control
              type="boolean"
              value={status}
              placeholder="Enter Status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Select
              aria-label="Default select example"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option>Account Type</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
