import React,{useEffect} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faStethoscope, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const HomeOtherSection = () => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    if (id === 3) {
      navigate('/appointment');
    }
  };

  const sections = [
    { id: 1, name: 'Primary Care', icon: faStethoscope },
    { id: 2, name: 'Emergency Cases', icon: faAmbulance },
    { id: 3, name: 'Online Appointment', icon: faCalendarCheck },
  ];

  return (
    <div className="bg-primary py-5">
      <Container>
        <Row className="text-center">
          {sections.map(({ id, name, icon }) => (
            <Col xs={12} md={4} className="mb-4" key={id}>
              <Card
                className="p-4 rounded shadow-sm card-hover-effect"
                onClick={() => handleCardClick(id)}
                style={{
                  background: '#fff',
                  transition: 'transform 0.3s ease',
                }}
                role={id === 3 ? 'button' : undefined}
                aria-label={name}
              >
                <FontAwesomeIcon icon={icon} className="fs-1 mb-3 text-primary" />
                <h4 className="text-dark">{name}</h4>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeOtherSection;