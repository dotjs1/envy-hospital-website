import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container fluid>
        <h2 className="text-center mb-4">Envy Hospitals</h2>
        <hr className="border-light" />

        <Row className="text-center text-md-start mb-4 p-3">
          {/* Follow Us */}
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h4>Follow Us</h4>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#" aria-label="YouTube" className="text-white fs-4">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white fs-4">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white fs-4">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="Facebook" className="text-white fs-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h4>Quick Links</h4>
            <ul className="list-unstyled mt-3">
                 <li><Link to='/aboutus' className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to='/aboutsite' className="text-white text-decoration-none">About this site</Link></li>
              <li><Link to='/contact' className="text-white text-decoration-none">Contacts</Link></li>
              <li><Link to='/locations' className="text-white text-decoration-none">Locations</Link></li>
              <li><Link  className="text-white text-decoration-none">Media Request</Link></li>
              <li><a href="#" className="text-white text-decoration-none">News Network</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
            </ul>
          </Col>

          {/* Actions */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center align-items-md-start gap-3">
            <Link to='/doctors' className="btn btn-light rounded-pill w-75">Find a Doctor</Link>
            <Link href="#" className="btn btn-light rounded-pill w-75" to="/login">Login</Link>
            <Link to="/department" className="btn btn-light rounded-pill w-75">Departments</Link>
          </Col>
        </Row>

        <hr className="border-light" />

        {/* Bottom Footer */}
        <Row className="text-center text-success pt-3">
          <Col xs={12} md={3}><small>&copy; Envy Hospitals {new Date().getFullYear()}</small></Col>
          <Col xs={12} md={3}><a href="#" className=" text-decoration-none"><small>Terms & Conditions</small></a></Col>
          <Col xs={12} md={3}><a href="#" className=" text-decoration-none"><small>Health Info Policy</small></a></Col>
          <Col xs={12} md={3}><small>10,000+ Happy Patients</small></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
