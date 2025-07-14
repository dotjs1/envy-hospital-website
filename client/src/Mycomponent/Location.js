import React from 'react';
import image3 from './Images/Image3.png';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpeg';

const locations = [
  { id: 1, name: 'Bangalore Campus', image: image3 },
  { id: 2, name: 'Delhi Campus', image: image4 },
  { id: 3, name: 'Mumbai Campus', image: image5 },
];

const Location = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5" style={{ fontFamily: 'sans-serif' }}>
        Our Clinic Locations
      </h2>
      <div className="row g-4 justify-content-center">
        {locations.map((loc) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={loc.id}>
            <div
              className="card h-100 border-0 shadow location-card text-dark hover-shadow"
              style={{ transition: 'transform 0.3s ease' }}
            >
              <div className="ratio ratio-4x3">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="card-img-top object-fit-cover rounded-top"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-center fw-semibold">{loc.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
