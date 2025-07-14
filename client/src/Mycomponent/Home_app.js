import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image2 from './Images/Image2.png';
import { motion } from 'framer-motion';
const HomeApp = () => {
  const navigate = useNavigate();

  const handleAppointment = () => navigate('/appointment');
  const handleDepartments = () => navigate('/department');

  return (
    <motion.div
      className="appointment_div position-relative text-white"
      style={{
        backgroundImage: `url(${Image2})`,
        minHeight:'100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
        initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background overlay for contrast */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>

      {/* Content */}
      <div className="position-relative h-100 d-flex align-items-center">
        <div className="container text-start p-4 p-md-5" style={{ maxWidth: '800px' }}>
          <motion.h1 className="mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}>Making Health Care Affordable and Better Together</motion.h1>
  <motion.p
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Booking a hospital appointment is now easier and more convenient than ever.
            Whether you're scheduling a routine check-up, specialist consultation, or follow-up care,
            our system ensures timely and personalized medical attention.
          </motion.p>
        <motion.div
            className="d-flex flex-wrap gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button
              className="btn btn-primary"
              onClick={handleAppointment}
              aria-label="Make an appointment"
            >
              Make an Appointment
            </button>
            <button
              className="btn btn-outline-light"
              onClick={handleDepartments}
              aria-label="View available departments"
            >
              View Departments
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeApp;
