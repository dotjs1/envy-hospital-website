import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Whychoose = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container_why my-5">
      <h2 className="text-center fw-bold mb-5" style={{ fontFamily: 'sans-serif' }}>
        Why Choose Envy Hospitals?
      </h2>

      <div className="row g-4 " style={{paddingLeft:'100px',paddingRight:'100px'}}>
        {/* Card 1 */}
        <div className="col-md-6" data-aos="fade-right">
          <div className="card h-100 border-0 shadow-sm gradient-card-1 text-dark">
            <div className="card-body">
              <h4 className="card-title">✅ Successful Treatment</h4>
              <p className="card-text">
                Our experience of treating millions of patients each year prepares us to take care of the one who matters most — <strong>you</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6" data-aos="fade-left">
          <div className="card h-100 border-0  shadow-sm bg-dark text-white">
            <div className="card-body">
              <h4 className="card-title">🩺 All Answers</h4>
              <p className="card-text">
                Count on your experts to deliver an accurate diagnosis and the right plan — the <strong>first time</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card Full Width */}
        <div className="col-12" data-aos="zoom-in">
          <div className="card h-100 w-90 border-0 shadow gradient-card-2 text-white p-4">
            <h3 className="fw-bold">🏥 Best Experience</h3>
            <p>
              We employ the best specialists. <br />
              Would you like to get to know our team?
            </p>
            <div className='btns' style={{width:'auto'}}>
                  <button className="btn btn-success rounded-pill w-100">More Info</button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
