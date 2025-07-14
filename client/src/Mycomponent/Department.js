import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserMd, faBaby, faHeartbeat, faBone, faFemale,
  faEarListen, faEye, faXRay, faMicroscope, faBrain,
  faToilet, faVial, faLungs, faNotesMedical, faStethoscope
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Department = () => {
  const [active, setActive] = useState(null);
  const [searchvalue, setsearchvalue] = useState('');
const navigate=useNavigate();
  const departments = [
    { id: 1, name: "General Medicine", icon: faUserMd, description: "Provides diagnosis and treatment for a wide range of common illnesses and conditions." },
    { id: 2, name: "Pediatrics", icon: faBaby, description: "Specializes in medical care for infants, children, and adolescents." },
    { id: 3, name: "Cardiology", icon: faHeartbeat, description: "Deals with disorders of the heart and blood vessels." },
    { id: 4, name: "Orthopedics", icon: faBone, description: "Focuses on the musculoskeletal system including bones, joints, and muscles." },
    { id: 5, name: "Gynecology", icon: faFemale, description: "Provides care related to the female reproductive system." },
    { id: 6, name: "Dermatology", icon: faNotesMedical, description: "Treats conditions related to the skin, hair, and nails." },
    { id: 7, name: "ENT (Otolaryngology)", icon: faEarListen, description: "Manages diseases of the ear, nose, and throat." },
    { id: 8, name: "Ophthalmology", icon: faEye, description: "Specializes in eye care and vision correction." },
    { id: 9, name: "Radiology", icon: faXRay, description: "Uses imaging techniques like X-rays and ultrasounds for diagnosis." },
    { id: 10, name: "Pathology", icon: faMicroscope, description: "Analyzes lab samples to diagnose diseases." },
    { id: 11, name: "Psychiatry", icon: faBrain, description: "Provides mental health care and treatment for psychological disorders." },
    { id: 12, name: "Urology", icon: faToilet, description: "Treats urinary tract and male reproductive system issues." },
    { id: 13, name: "Gastroenterology", description: "Deals with digestive system disorders." },
    { id: 14, name: "Endocrinology", icon: faVial, description: "Manages hormonal and metabolic disorders like diabetes and thyroid issues." },
    { id: 15, name: "Pulmonology", icon: faLungs, description: "Focuses on respiratory system diseases such as asthma and COPD." }
  ];
const filterdepartment=departments.filter((department)=>
searchvalue.trim() ===""||department.name.toLowerCase().includes(searchvalue.toLowerCase())
)
  const handleToggle = (id) => {
    setActive(prev => (prev === id ? null : id));
  };
const Toappointment=()=>{
  navigate('/appointment')
}
const Todoctor=()=>{
  navigate('/doctors')
}
const handleinput=(e)=>{
  const input=e.target.value.trim();
  setsearchvalue(input)
}
  return (
    <section className="Department">
      <Container>
        <h1 className="text-center mb-3">Our Departments</h1>
        <p className="text-center text-white mb-4">Explore our specialized medical departments below:</p>
         
        <div className="d-flex flex-column gap-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <input className='input p-2 border-primary rounded' type='search' placeholder='Search Departments' value={searchvalue} onChange={handleinput}/>
          {filterdepartment.length==0 ?(
    <h4 className="text-center text-light p-4">
  😔 No matching Department found. Try adjusting your search criteria and give it another go!
</h4> ):
          filterdepartment.map(({ id, name, icon, description }) => {
            const isActive = active === id;
            const displayIcon = icon || faStethoscope;

            return (
              <Card
                key={id}
                className={`shadow-sm ${isActive ? 'border-primary' : ''}`}
                onClick={() => handleToggle(id)}
                style={{ cursor: 'pointer' }}
                aria-expanded={isActive}
                 aria-controls={`collapse-${id}`}
                role="button"
              >
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs="auto" className="text-center">
                      <FontAwesomeIcon icon={displayIcon} className="text-primary" style={{ fontSize: '40px' }} />
                    </Col>
                    <Col>
                      <h5 className="mb-1">{name}</h5>
                      <Collapse in={isActive}>
                        <div id={`collapse-${id}`}>
                          <hr />
                          <p>{description}</p>
                          <Button variant="primary"  onClick={Todoctor}>Find {name} Doctor</Button>
                          <Button variant="success" className='mx-4 my-3' onClick={Toappointment}>Book Online Appointment</Button>
                        </div>
                      </Collapse>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Department;
