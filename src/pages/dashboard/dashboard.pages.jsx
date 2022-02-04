import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import NavbarComponent from "../../components/navbar/navbar.components";
import "./dashboard.styles.css";

function DashboardPage() {
  return (
    <main>
      <NavbarComponent />

      <section id="Dashboard-Page">
        <MDBContainer id="align">
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column" id="padding">
              <h1 className="text-width p-2">Holla,</h1>
              <h3 className="p-2 text-muted">Give your valuable feedback</h3>

              <button className="blue-bg-btn">Feedback Form</button>

              <h2 className="p-2">Why follow us ?</h2>

              <MDBRow id="rocket-width" className="justify-content-around">
                <MDBCol xl="2" md="4" className="mb-5 text-left ">
                  <img
                    src="/rocket.svg"
                    className="img-fluid z-depth-3 rounded-circle"
                    alt=""
                  />
                  <Link to="/">Skyrocket your knowledge</Link>
                </MDBCol>
                <MDBCol xl="2" md="4" className="mb-5 text-right">
                  <img
                    src="/rocket.svg"
                    className="img-fluid z-depth-3 rounded-circle"
                    alt=""
                  />
                  <Link to="/">Skyrocket your knowledge</Link>
                </MDBCol>
                <MDBCol xl="2" md="4" className="mb-5 text-right">
                  <img
                    src="/rocket.svg"
                    className="img-fluid z-depth-3 rounded-circle"
                    alt=""
                  />

                  <Link to="/">Skyrocket your knowledge</Link>
                </MDBCol>
              </MDBRow>
            </div>

            <MDBCol xl="5" md="4" className="mb-5 text-right">
              <img
                src="/main.svg"
                className="img-fluid z-depth-3 rounded-circle"
                alt=""
                id="padding"
              />
            </MDBCol>
          </div>
        </MDBContainer>

        <MDBContainer id="align">
          <h2>Article</h2>

          <MDBCol>
            <button type="button" className="btn btn-light" id="button">
              <img src="dsFrame.svg" width="30" alt="" /> Data Science
            </button>
            <button type="button" className="btn btn-light" id="button">
              <img src="frontendFrame.svg" width="30" alt="filter-option" />
              Data Science
            </button>
          </MDBCol>

          <MDBRow id="padding">
            <MDBCol>
              <div
                className="d-flex flex-column card justify-content-between"
                id="card-item"
              >
                <img className="card-img-top" src="card-image.svg" alt="card" />
                <div className="card-body">
                  <h3 className="card-title">Intro to Data Science</h3>
                  <p className="card-text">
                    Gives you a glimpse of how to get started in Data Science
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Shebin Joseph</small>
                  </p>

                  <button className="blue-bg-btn">Read More</button>
                </div>
              </div>
            </MDBCol>

            <MDBCol>
              <div
                className="d-flex flex-column card justify-content-between"
                id="card-item"
              >
                <img className="card-img-top" src="card-image.svg" alt="" />
                <div className="card-body">
                  <h3 className="card-title">Intro to Data Science</h3>
                  <p className="card-text">
                    Gives you a glimpse of how to get started in Data Science
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Shebin Joseph</small>
                  </p>

                  <button className="blue-bg-btn">Read More</button>
                </div>
              </div>
            </MDBCol>

            <MDBCol>
              <div
                className="d-flex flex-column card jusitfy-content-between"
                id="card-item"
              >
                <img className="card-img-top" src="card-image.svg" alt="" />
                <div className="card-body">
                  <h3 className="card-title">Intro to Data Science</h3>
                  <p className="card-text">
                    Gives you a glimpse of how to get started in Data Science
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Shebin Joseph</small>
                  </p>
                  <button className="blue-bg-btn">Read More</button>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </main>
  );
}

export default DashboardPage;
