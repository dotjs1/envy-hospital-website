import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutAsthaClinic = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-light py-5" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">About Envy Hospitals</h2>
          <p className="text-secondary fs-5 mt-3">
            At <strong>Envy Hospitals</strong>, healing begins with trust, compassion, and care.
            Founded with a vision to provide accessible and holistic healthcare, we’re more than a clinic — we’re a
            place where patients are heard, understood, and cared for with empathy and expertise.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-dark text-center mb-3">🩺 Our Mission</h4>
          <p className="text-muted text-center">
            To deliver high-quality, patient-centric medical care that blends modern diagnostics with heartfelt human connection.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-dark text-center mb-3">🌿 Our Approach</h4>
          <p className="text-muted text-center">
            From routine consultations to specialized care, our team offers personalized treatment backed by modern
            technology and deep medical expertise — all while prioritizing your well-being.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-dark text-center mb-3">❤️ Why Choose Us</h4>
          <ul className="list-unstyled text-center text-dark fs-5">
            <li>✔ Experienced & empathetic doctors</li>
            <li>✔ State-of-the-art medical facilities</li>
            <li>✔ Hassle-free appointment booking</li>
            <li>✔ A calm, clean, and recovery-focused environment</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-muted fs-6">
            Whether you're here for preventive care, a consultation, or specialized treatment —
            we welcome you with warmth and the assurance that your health is in capable hands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAsthaClinic;
