import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./dashboard.styles.css";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBBtn, mdbcard } from "mdbreact";
import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <body>
        <>
          <Navbar bg="white" variant="light">
            <Container>
              <div className="d-flex flex-row">
                <div>
                  <img
                    alt=""
                    src="./logo.svg"
                    width="65"
                    height="65"
                    position="absolute"
                    className="d-inline-block align-top"
                  />
                </div>
                <div className="d-flex flex-column" bg="#F1F6FE">
                  <h5 className="p-2 col-example text-left">
                    Google Developer Students Club
                  </h5>
                  <h6 className="p-2 col-example text-left">
                    MVJ College of Engineering
                  </h6>
                </div>
              </div>

              <Navbar.Collapse className="justify-content-end">
                <img
                  id="round"
                  alt=""
                  src="./profile-image.jpeg"
                  width="30"
                  height="30"
                  border-radius="40"
                  position="absolute"
                  className="d-inline-block align-top"
                />
                <Navbar.Text>
                  <a href="#">Shebin Joseph</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
        
        <MDBContainer>
          <div className="d-flex justify-content-around" >
            <div className="d-flex flex-column" >
              <h1 className="p-2" id="text-width" >Holla,</h1>
              <h3 className="p-2 text-muted" >Give your valuable feedback</h3>
              <button type="button" className="btn btn-info" id="text-width">feedback form -></button>
              <h3 className="p-2">Why follow us ?</h3>
              <MDBRow id = "rocket-width" className="justify-content-around">
                <MDBCol xl="2" md="4" className="mb-5 text-left ">
                  <img src="/rocket.svg" className="img-fluid z-depth-3 rounded-circle" alt="" />
                  <Link to="/">Skyrocket your knowledge</Link>
                </MDBCol>
                <MDBCol xl="2" md="4" className="mb-5 text-right">
                  <img src="/rocket.svg" className="img-fluid z-depth-3 rounded-circle" alt="" />
                  <Link to="/">Skyrocket your knowledge</Link>
                </MDBCol>
                <MDBCol xl="2" md="4" className="mb-5 text-right">
                  <img src="/rocket.svg" className="img-fluid z-depth-3 rounded-circle" alt="" />
                  <Link to="/">Skyrocket your knowledge</Link>
                </MDBCol>
                </MDBRow>
            </div>

            <MDBCol xl="4" md="4" className="mb-5 text-right" >
              <img src="/main.svg" className="img-fluid z-depth-3 rounded-circle" alt="" />
            </MDBCol>
          </div>
        </MDBContainer>


        <MDBContainer>

          <h3>Article</h3>
          <MDBCol>
            <button type="button" classname="btn btn-light" id="button">
                <img src="dsFrame.svg" width="30" /> Data Science
            </button>
            <button type="button" classname="btn btn-light" id="button">
                <img src="frontendFrame.svg" width="30" /> Data Science
            </button>
          </MDBCol>

          <MDBCol>
            
          </MDBCol>

        </MDBContainer>




      </body>
    </div>
  );
}

export default DashboardPage;
