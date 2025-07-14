# Envy Hospital Website

Welcome to the Envy Hospitals website repository – a responsive, modern, and accessible healthcare platform. This project provides a comprehensive hospital management system, allowing patients to browse departments, view doctors, book appointments via a secure backend.

## Features
- Online Appointment Booking
    - Book consultations with available doctors via a user-friendly form.

- Doctor Listings
    - Browse doctors by name, specialty, and department.

- Department Overview
    - View key hospital departments and services offered.

- Modern, Responsive UI
    - Designed with React and Bootstrap for a clean and adaptable layout across all devices.

- Backend Integration with MongoDB
    - All appointment data is stored in a MongoDB database via a secure Node.js/Express API.

- API-Driven Architecture  
    - Frontend and backend communicate via RESTful APIs for scalable data handling.

- Separate Administrative Portal (External Project)
    - Appointments booked here can be viewed and managed through a separate admin dashboard project (connected to the same backend API).

- Interactive UI Components
    - AOS animations,Framer Motion transitions, FontAwesome icons, and hover effects for better UX.

- Accessible
    - Follows basic accessibility practices including keyboard support and ARIA roles.

## screenshot(mobile) of website
<img src="./client//src/Mycomponent/Images/screenshot.png" alt="Screenshot" height="300" width="500">

## Technology 
- React
     - Front-end framework

- React-Router
    - For navigation between pages

- Bootstrap
    - Responsive design and layout

- FontAwesome
    - Icon library    

- AOS (Animate On Scroll)	
    - 	For scroll-based animations

- Framer Motion	
    - For smooth transitions, page animations, and element motion  

- React-Bootstrap	
    - 	React components for Bootstrap

- React Hooks	
    - For managing state and side effects

- MongoDB + Mongoose 
    - Database and schema management

- Node.js + Express.js 
    - RESTful API    

- Cross-Origin Resource Sharing (CORS) 
    - Allows frontend and admin dashboard to access the same backend

##  Future Enhancements
- User login and dashboard

- Doctor availability calendar

- Add notification emails on appointment booking

- Admin panel for managing appointments

- Search functionality for doctors and departments

- Integration with backend/database (e.g., Firebase, Node.js)

##  Start the servers
- Backend (e.g., on port 5000)
    - cd ../server
        - npm run dev

- Frontend (e.g., on port 3000)
    - cd ..client
        - npm start

## Contributing

- Contributions are welcome! Feel free to fork this repo and open a pull request.

## License
- This project is licensed under the MIT License.