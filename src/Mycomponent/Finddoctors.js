import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Collapse, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMailBulk,
  faStethoscope,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Finddoctors = () => {
  const [data, setData] = useState([]);
  const [selectValue, setSelectValue] = useState('Name');
  const [inputValue, setInputValue] = useState('');
  const [activeId, setActiveId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const FetchApi = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/user/doctordata');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setData(data.data || []);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    FetchApi();
  }, []);

  const fieldMap = {
    Name: 'docname',
    Department: 'docspec',
  };

  const filteredDoctors = data.filter((doctor) => {
    const key = fieldMap[selectValue];
    return (
      inputValue.trim() === '' ||
      (doctor[key] &&
        doctor[key].toLowerCase().includes(inputValue.toLowerCase()))
    );
  });

  const toggleExpand = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  const handleAppointment = () => {
    navigate('/appointment');
  };

  return (
    <section className="doctor_div p-4">
      <Container>
        <h1 className="text-center mb-4">Meet Our Doctors</h1>
        {/* Search Filters */}
        <Row className="shadow-sm bg-light rounded p-3 align-items-center g-3 mb-4">
          <Col xs={12} md={4}>
            <select
              className="form-select"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="Name">Search by Name</option>
              <option value="Department">Search by Department</option>
            </select>
          </Col>
          <Col xs={12} md={8}>
            <input
              type="search"
              className="form-control"
              placeholder={`Enter ${selectValue}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.trimStart())}
            />
          </Col>
        </Row>

        {/* Main content */}
        {error && (
          <p className="text-danger text-center">{error}</p>
        )}

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status" />
            <p className="mt-2">Loading doctors...</p>
          </div>
        ) : data.length === 0 ? (
          <h5 className="text-center text-secondary">
            😔 No doctors available at the moment.
          </h5>
        ) : filteredDoctors.length === 0 ? (
          <h5 className="text-center text-primary p-4">
            😔 No matching doctor found. Try another name or department.
          </h5>
        ) : (
          <div className="d-flex flex-column gap-4">
            {filteredDoctors.map((doctor) => {
              const isActive = activeId === doctor._id;
              return (
                <Card
                  key={doctor._id}
                  onClick={() => toggleExpand(doctor._id)}
                  className={`shadow-sm ${isActive ? 'border-primary' : ''}`}
                  aria-expanded={isActive}
                  role="button"
                >
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col md={4}>
                        <h4 className="mb-2" style={{ textTransform: 'capitalize' }}>
                          <FontAwesomeIcon icon={faUser} /> {doctor.docname}
                        </h4>
                        <p className="text-primary mb-0" style={{ textTransform: 'capitalize' }}>
                          <FontAwesomeIcon icon={faStethoscope} /> {doctor.docspec}
                        </p>
                        <p className="mb-0">
                          <FontAwesomeIcon icon={faMailBulk} />{' '}
                          <a href={`mailto:${doctor.email}`} style={{ textDecoration: 'none' }}>
                            {doctor.email}
                          </a>
                        </p>
                      </Col>

                      <Col md={8}>
                        <Collapse in={isActive}>
                          <div className="mt-3">
                            <p>{doctor.aboutdoc || 'No additional information provided.'}</p>
                            <Button variant="primary" onClick={handleAppointment}>
                              Book Appointment
                            </Button>
                            <Button variant="outline-success" className="ms-3">
                              View Profile
                            </Button>
                          </div>
                        </Collapse>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Finddoctors;
