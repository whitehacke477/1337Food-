import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Body from './info';
import FoodCards from './food';
import ContactUs from './contactus';
import './Styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';

const Appfood = () => {
  return (
  
    
    <div>
           
          <Body />
          <FoodCards />
          <ContactUs />
    </div>
  );
};


export default Appfood;

