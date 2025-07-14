import React, { useRef,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Offercard from './Offercard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft, faArrowRight, faCalendarCheck, faUserMd,
  faAmbulance, faVideo, faMicroscope, faProcedures,
  faBaby, faCapsules, faHospital
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const hospitalHighlights = [
    {
      id: 1,
      title: "Easy Booking & Fast Check-In",
      description: "Seamless scheduling and swift front desk processing for stress-free visits.",
      icon: faCalendarCheck,
    },
    {
      id: 2,
      title: "Top Doctors & Trusted Specialists",
      description: "Connect with experienced professionals across every medical field.",
      icon: faUserMd,
    },
    {
      id: 3,
      title: "24/7 Emergency Support",
      description: "Immediate and expert care for critical and urgent situations.",
      icon: faAmbulance,
    },
    {
      id: 4,
      title: "Virtual Consultations from Home",
      description: "Receive medical guidance remotely using secure video calls.",
      icon: faVideo,
    },
    {
      id: 5,
      title: "Advanced Diagnostic Labs",
      description: "State-of-the-art testing facilities with accurate results.",
      icon: faMicroscope,
    },
    {
      id: 6,
      title: "Expert Surgical Care",
      description: "Precise and professional procedures with cutting-edge technology.",
      icon: faProcedures,
    },
    {
      id: 7,
      title: "Compassionate Maternity Services",
      description: "Supportive care for expecting mothers from prenatal to postnatal stages.",
      icon: faBaby,
    },
    {
      id: 8,
      title: "In-House Pharmacy Convenience",
      description: "Get your prescriptions filled promptly without leaving the hospital.",
      icon: faCapsules,
    },
    {
      id: 9,
      title: "Clean Facilities & Comfortable Rooms",
      description: "Modern hospital spaces designed for safety, privacy, and comfort.",
      icon: faHospital,
    }
  ];

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero-section py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-4">We Offer These Services</h2>

        {/* Scroll Controls */}
        <div className="d-flex justify-content-between align-items-center px-2 mb-3">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow-icon fs-3"
            role="button"
            tabIndex={0}
            title="Scroll Left"
            aria-label="Scroll left"
            onClick={() => handleScroll('left')}
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow-icon fs-3"
            role="button"
            tabIndex={0}
            title="Scroll Right"
            aria-label="Scroll right"
            onClick={() => handleScroll('right')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Scrollable Card List */}
        <div
          className="hide-scrollbar"
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1rem',
            paddingBottom: '0.5rem',
            scrollBehavior: 'smooth'
          }}
        >
          {hospitalHighlights.map((highlight) => (
            <div key={highlight.id} style={{ flex: '0 0 auto', width: '300px' }} data-aos="zoom-in">
              <Offercard icons={highlight.icon} Title={highlight.title} text={highlight.description} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
