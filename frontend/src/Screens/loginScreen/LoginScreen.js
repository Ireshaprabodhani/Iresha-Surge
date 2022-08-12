import axios from 'axios';
import React, { useState } from 'react'
import { Button, Dropdown, Form } from 'react-bootstrap';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import MainScreen from '../../components/MainScreen';
import './LoginScreen.css';

const LoginScreen = ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    
    const submitHandler = async(e) => {
      e.preventDefault();
      
      if (accountType == "Student") {

        try {
          const config = {

            headers: {
              "Content-type": "application/json"
            }
          }
          setLoading(true)

          const { data } = await axios.post('/api/student/login',
            {
              email, password, accountType
            },
            config
          )
          console.log(data);
          /*localstorage cannot store the object data . we need
          to convert to string data */
          localStorage.setItem('userInfo', JSON.stringify(data));

          setLoading(false)
            
        } catch (error) {
          setError(error.response.data.message);
          setLoading(false);
        }
      }
    }

    return (
      <MainScreen title="LOGIN">
        <div div className="loginContainer">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
                  <Dropdown.Item>Admin</Dropdown.Item>
                  <Dropdown.Item>Student</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </MainScreen>
    );
   
  
};

export default LoginScreen
