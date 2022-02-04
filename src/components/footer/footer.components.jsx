import React from "react";
import "./footer.styles.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter color="white" className="font-small pt-4 mt-4">
    <MDBContainer fluid className="text-center text-md-center">
      <MDBRow>
        <MDBCol>
        <img id="round"
          alt=""
          src="/profile-image.jpeg"
          width="100px"
          height="100px"
          position="absolute"
          className="d-inline-block align-top"
        />
        <h5 className="title ">Shebin Joseph</h5>
          <p>
            Description about the mentor. This is a small description about him.
          </p>
        </MDBCol>
        {/* <MDBCol md="6">
          <h5 className="title ">Shebin Joseph</h5>
          <p>
            Description about the mentor. This is a small description about him
          </p>
        </MDBCol> */}
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
      </MDBContainer>
    </div>
  </MDBFooter>
  );
}

export default Footer;
