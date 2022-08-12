import React, { useState } from 'react'
import "./RegisterScreen.css";
import MainScreen from "../../components/MainScreen";
import { Button, Dropdown, Form } from 'react-bootstrap';
import "./RegisterScreen.css";
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import axios from 'axios';



function RegisterScreen() {
 
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

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);




  const submitHandler = async (e) => {
    e.preventDefault();
   } 

 



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
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                Account Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">Admin</Dropdown.Item>
                <Dropdown.Item href="">Student</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
  
  
}

export default RegisterScreen