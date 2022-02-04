import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./dashboard.styles.css";
import Footer from "../../components/footer/footer.components";
import {  MDBRow, MDBCol, MDBContainer} from "mdbreact";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function DashboardPage() {
  return (
    <div>
      <body id="bgcolor">
        <>
          <Navbar bg="white" variant="light">
            <Container>
              <div className="d-flex flex-row">
                <div>
                  <img
                    alt=""
                    src="./logo.svg"
                    width="75"
                    height="75"
                    position="absolute"
                    className="d-inline-block align-top"
                  />
                </div>
                <div className="d-flex flex-column" id="navbarpadding">
                  <h3 className="p-2 col-example text-left">
                    Google Developer Students Club
                  </h3>
                  <h5 className="p-2 col-example text-left" id="align">
                    MVJ College of Engineering
                  </h5>
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
        
        <MDBContainer id="align">
          <div className="d-flex justify-content-around" >
            <div className="d-flex flex-column" id="padding">
              <h1 className="p-2" id="text-width" >Holla,</h1>
              <h3 className="p-2 text-muted" >Give your valuable feedback</h3>
              <br/>
              <Link to="\">
              <button type="button" className="btn btn-info" id="text-width">feedback form -></button>
              </Link>
              <br/>
              <br/>
              <h2 className="p-2">Why follow us ?</h2>
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

            <MDBCol xl="5" md="4" className="mb-5 text-right" >
              <img src="/main.svg" className="img-fluid z-depth-3 rounded-circle" alt="" id="padding"/>
            </MDBCol>
          </div>
        </MDBContainer>

        <MDBContainer id="align">

          <h2 >Article</h2>
          <MDBCol>
            <button type="button" classname="btn btn-light" id="button">
                <img src="dsFrame.svg" width="30" /> Data Science
            </button>
            <button type="button" classname="btn btn-light" id="button">
                <img src="frontendFrame.svg" width="30" /> Data Science
            </button>
          </MDBCol>

          <MDBRow id="padding">
            <MDBCol>
            <div className="d-flex flex-column card justify-content-between" id="card-item" >
              <img className="card-img-top" src="card-image.svg" alt=""/>
              <div className="card-body">
                <h3 className="card-title">Intro to Data Science</h3>
                <p className="card-text">Gives you a glimpse of how to get started in Data Science</p>
                <p className="card-text"><small className="text-muted">Shebin Joseph</small></p>
                <Link to="/details">
                  <Button variant="outline-info">Read More -></Button>
                </Link>
              </div>
            </div>
            </MDBCol>

            <MDBCol>
            <div className="d-flex flex-column card justify-content-between" id="card-item" >
              <img className="card-img-top" src="card-image.svg" alt=""/>
              <div className="card-body">
                <h3 className="card-title">Intro to Data Science</h3>
                <p className="card-text">Gives you a glimpse of how to get started in Data Science</p>
                <p className="card-text"><small className="text-muted">Shebin Joseph</small></p>
                <Link to="/details">
                  <Button variant="outline-info">Read More -></Button>
                </Link>
              </div>
            </div>
            </MDBCol>
          
            <MDBCol>
            <div className="d-flex flex-column card jusitfy-content-between" id="card-item" >
              <img className="card-img-top" src="card-image.svg" alt=""/>
              <div className="card-body">
                <h3 className="card-title">Intro to Data Science</h3>
                <p className="card-text">Gives you a glimpse of how to get started in Data Science</p>
                <p className="card-text"><small className="text-muted">Shebin Joseph</small></p>
                <Link to="/details">
                  <Button variant="outline-info">Read More -></Button>
                </Link>
              </div>
            </div>
            </MDBCol>
          </MDBRow>

     </MDBContainer> 
      <br/>
      </body>

      <Footer />
    </div>
  );
}

export default DashboardPage;
