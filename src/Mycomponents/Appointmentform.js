import React, { useState, useEffect } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    ptname: '',
    ptemail: '',
    doctorname: '',
    dateofappointment: ''
  });
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/user/doctordata');
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error('Error fetching doctors:', err);
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/user/patient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData })
      });

      const data = await res.json();
      alert(data.message);
      setFormData({
        ptname: '',
        ptemail: '',
        doctorname: '',
        dateofappointment: ''
      });
    } catch (err) {
      alert('Something went wrong while submitting the form.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Your Name</label>
          <input
            type="text"
            name="ptname"
            className="form-control"
            value={formData.ptname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="ptemail"
            className="form-control"
            value={formData.ptemail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Select Doctor</label>
          <select
            name="doctorname"
            className="form-select"
            value={formData.doctorname}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            {doctors.map((doc, idx) => (
              <option key={idx} value={doc.docname}>
                {doc.docname} ({doc.docspec})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Select Date</label>
          <input
            type="date"
            name="dateofappointment"
            className="form-control"
            value={formData.dateofappointment}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;