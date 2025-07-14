import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutWebsite = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-light" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">About This Website</h2>
          <p className="text-secondary mt-3 fs-5">
            Welcome to the official website of <strong>Envy Hospitals</strong> — your digital gateway to compassionate healthcare.
            Designed for ease of use, our platform allows patients to learn about our services, connect with expert doctors,
            and book appointments—all from the comfort of their home.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="text-dark mb-4 text-center">💻 What You’ll Find Here</h4>
          <ul className="list-unstyled fs-5 text-center text-dark">
            <li className="mb-2">👨‍⚕️ Profiles of our experienced medical professionals</li>
            <li className="mb-2">📋 Easy online appointment scheduling</li>
            <li className="mb-2">🏥 Information about our specialties and departments</li>
            <li className="mb-2">📞 Direct contact options for emergencies or consultations</li>
            <li className="mb-2">💬 Helpful content to guide your wellness journey</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-muted fs-6">
            Our website is mobile-friendly, secure, and frequently updated with the latest health news and hospital updates.
            Whether you're a new visitor or a returning patient, we aim to make your experience smooth, informative, and reassuring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWebsite;
