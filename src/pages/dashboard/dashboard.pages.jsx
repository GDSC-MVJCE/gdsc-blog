import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./dashboard.styles.css";

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
                <div className="d-flex flex-column">
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
      </body>
    </div>
  );
}

export default DashboardPage;
