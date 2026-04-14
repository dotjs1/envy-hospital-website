import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppointmentForm from './Mycomponents/Appointmentform';
// import DoctorList from './client/src/components/DoctorList';

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Hospital Appointment</a>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6"><AppointmentForm /></div>
                    {/* <div className="col-md-6"><DoctorList /></div> */}
                </div>
            </div>
        </div>
    );
}

export default App;
