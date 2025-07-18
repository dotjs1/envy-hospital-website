import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image7 from './Images/appointment2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { faPhone, faMailBulk, faClock } from '@fortawesome/free-solid-svg-icons';

const Appointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    doctor: "",
    date: "",
  });
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorActive, setErrorActive] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('https://envy-hospital-website-server.onrender.com/api/user/doctordata');
      if (!response.ok) throw new Error('Failed to fetch doctors');
      const data = await response.json();
      setDoctors(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const postAppointment = async () => {
    try {
      const response = await fetch('https://envy-hospital-website-server.onrender.com/api/user/patient', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ptname: form.name,
          ptemail: form.email,
          ptnumber: form.number,
          doctorname: form.doctor,
          dateofappointment: form.date
        })
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setResponseMessage(data);
      } else {
        setError(data.error || 'Something went wrong.');
        setErrorActive(true);
      }
    } catch (err) {
      setError('Server error, please try again later.');
      setErrorActive(true);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAppointment();
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', number: '', doctor: '', date: '' });
    setError('');
    setErrorActive(false);
  };

  return (
    <motion.div
      className="Appointment_div"
      style={{
        backgroundImage: `url(${Image7})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingBottom: '50px'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container fluid className="text-start px-4 py-5">
        <Row className="justify-content-center">
          <Col md={6} className="bg-dark bg-opacity-75 p-4 rounded text-white">
            {submitted ? (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h2 className="text-center text-success mb-4">Appointment Confirmed 🎉</h2>
                <ul className="fs-5">
                  <li><strong>Patient Name:</strong> {responseMessage?.patient?.name}</li>
                  <li><strong>Doctor:</strong> {responseMessage?.doctor}</li>
                  <li><strong>Date:</strong> {responseMessage?.date}</li>
                  <li><strong>Contact:</strong> {responseMessage?.patient?.number}</li>
                </ul>
                <div className="text-center mt-4">
                  <p className='mb-2'>Need help? Reach us at:</p>
                  <p><FontAwesomeIcon icon={faPhone} /> +91 9876543210</p>
                  <p><FontAwesomeIcon icon={faMailBulk} /> contact@envyhospitals.in</p>
                  <button className="btn btn-outline-light mt-3" onClick={resetForm}>Book Another Appointment</button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                onSubmit={handleSubmit}
              >
                <h2 className="text-center mb-4">Book an Appointment</h2>

                {errorActive && (
                  <div className="alert alert-danger text-center py-2">{error}</div>
                )}

                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" name="name" className="form-control" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input type="tel" name="number" className="form-control" placeholder="Enter your mobile number" value={form.number} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Select Doctor</label>
                  <select className="form-select" name="doctor" value={form.doctor} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    {doctors.map((doc, idx) => (
                      <option key={idx} value={doc.docname}>{doc.docname}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Preferred Date</label>
                  <input type="date" name="date" className="form-control" value={form.date} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-success w-100 mt-3">Confirm Appointment</button>
              </motion.form>
            )}
          </Col>

          <Col md={5} className="d-flex flex-column justify-content-center text-white text-center py-4 mt-4 mt-md-0" data-aos="fade-left">
            <h3 className="mb-3">Need Assistance?</h3>
            <p className="fs-5"><FontAwesomeIcon icon={faPhone} /> +91 9876543210</p>
            <p className="fs-5"><FontAwesomeIcon icon={faMailBulk} /> contact@envyhospitals.in</p>
            <hr className="border-light" />
            <h4>For Offline Appointments</h4>
            <p className="fs-5">📞 +91 88765 457680</p>
            <p className="fs-5"><FontAwesomeIcon icon={faClock} /> Mon–Sat, 9AM–6PM</p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Appointment;
