import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube, faInstagram, faTumblr, faSpotify } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <Container>
        <Row>
          <Col md={3} sm={6} className="mb-3">
            <h6 className="fw-bold">About Us</h6>
            <ul className="list-unstyled">
              <li>About Us Overview</li>
              <li>Leadership Team</li>
              <li>Values In Action</li>
              <li>Franchising Info</li>
              <li>Recalls & Alerts</li>
              <li>Real Estate</li>
              <li>Accessibility</li>
              <li>Investor Relations</li>
              <li>News & Notifications</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li>Services Overview</li>
              <li>Delivery Partners</li>
              <li>Wi-Fi</li>
              <li>PlayPlaces & Parties</li>
              <li>Mobile Order & Pay</li>
              <li>Trending Now</li>
              <li>McDonald's Merchandise</li>
              <li>Family Fun Hub</li>
              <li>MyMcDonald's Rewards</li>
              <li>McCafé®</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h6 className="fw-bold">Community</h6>
            <ul className="list-unstyled">
              <li>Community Overview</li>
              <li>Now Serving</li>
              <li>Scholarship Overview</li>
              <li>Ronald McDonald House Charities®</li>
              <li>McDonald's International</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <ul className="list-unstyled">
              <li>Contact Us Overview</li>
              <li>Gift Card FAQs</li>
              <li>Donations</li>
              <li>Employment</li>
              <li>Customer Feedback</li>
              <li>FAQs</li>
            </ul>
          </Col>
        </Row>
        
        <Row className="py-3 align-items-center">
  {/* Social Media Icons on the Left */}
  <Col md={6} className="text-start">
    <div className="d-flex">
      <FontAwesomeIcon icon={faFacebook} className="mx-2" />
      <FontAwesomeIcon icon={faTwitter} className="mx-2" />
      <FontAwesomeIcon icon={faYoutube} className="mx-2" />
      <FontAwesomeIcon icon={faInstagram} className="mx-2" />
      <FontAwesomeIcon icon={faTumblr} className="mx-2" />
      <FontAwesomeIcon icon={faSpotify} className="mx-2" />
    </div>
  </Col>

  {/* Images on the Right */}
  <Col md={6} className="text-end">
    <div className="d-flex justify-content-end">
      <img src="./src/assets/image1.png" alt="Image 1" className="img-fluid mx-2" style={{ width: "120px" }} />
      <img src="./src/assets/image2.png" alt="Image 2" className="img-fluid mx-2" style={{ width: "120px" }} />
    </div>
  </Col>
</Row>


        
        <Row className="text-center small border-top pt-3">
          <Col>
            <span>Privacy (Updated) | California Privacy Notice | Consumer Health Data | Terms & Conditions | Accessibility</span>
            <br />
            <span>&copy; 2017 - 2025 McDonald's. All Rights Reserved</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
