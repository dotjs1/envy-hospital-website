import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center text-primary mb-4">📞 Contact Us</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h4>Clinic Information</h4>
              <p><strong>Astha Clinic</strong></p>
              <p>🏥 Address: 123 Care Street,Medical Area, New Delhi</p>
              <p>📞 Phone: +91 9876543210</p>
              <p>📧 Email: contact@envyhospitals.in</p>
              <p>🕒 Hours: Mon–Sat, 9AM–6PM</p>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h4>Send Us a Message</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your email address" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;