import logo from './logo.svg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './Mycomponent/Header';
import Footer from './Mycomponent/Footer';
import Appointment from './Mycomponent/AppointmentForm';
import Combine from './Mycomponent/Combine';
import Department from './Mycomponent/Department';
import Finddoctors from './Mycomponent/Finddoctors';
import Aboutus from './Mycomponent/Aboutus';
import AboutWebsite from './Mycomponent/Aboutsite';
import Location from './Mycomponent/Location';
import ContactUs from './Mycomponent/contact';
import Signup from './Mycomponent/Signup';
import Login from './Mycomponent/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div className="App">
   <Router>
       <Header/>
    <Routes>
      <Route path='/' element={<Combine/>}/>
      <Route path='/appointment' element={ <Appointment/>}/>
      <Route path='/department' element={ <Department/>}/>
      <Route path='/doctors' element={   <Finddoctors/>}/>
      <Route path='/login' element={   <Login/>}/>
      <Route path='/signup' element={   <Signup/>}/>
      <Route path='/aboutus' element={  <Aboutus/>}/>
      <Route path='/aboutsite' element={  <AboutWebsite/>}/>
      <Route path='/locations' element={  <Location/>}/>
      <Route path='/contact' element={  <ContactUs/>}/>
    </Routes>
       <Footer/>
    
   </Router>

  
    </div>
  );
}

export default App;
