import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
// import Body from './info';
// import FoodCards from './food';
// import ContactUs from './contactus';
import StudentSignup from './StudentSignup';
import StudantLogin from  './StudantLogin' ;
import Appfood from './Appfood';
import Cheflogin from './Cheflogin' ;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/studentsignup" element={<StudentSignup />} />
          <Route path="/StudantLogin" element={<StudantLogin />} />
          <Route path="/Cheflogin" element={<Cheflogin />} />
          <Route path='/Appfood' element={<Appfood/>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
