import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css';

const LandingPage = () => {

  //useEffect(() => {
    //const userInfo = localStorage.getItem("userInfo");

    //if (userInfo) {
      //history.push("/mynotes");
    //}
 // }//, [history]);
    
    
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title"> Welcome to School Notes</h1>
            <p className="subtitle">One safe place for all your notes.</p>
          </div>
         
            <div className="buttonContainer ">
              <a href="/login">
                <Button size="lg" className="landingbutton " >
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingbutton" variant='outline-primary' >
                  SignUp
                </Button>
              </a>
            </div>
         
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage
