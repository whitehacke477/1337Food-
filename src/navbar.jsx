import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="dropdown">
          <button type="button" className="btn btn-outline-info my-2 my-sm-0" id="menu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a  className="navbar-brand"><i className="bi bi-list"></i></a>
          </button>
          <ul className="dropdown-menu">
              <li> <Link to={'/studentsignup'} class="dropdown-item "> <em>Studant Sign up</em></Link></li> 
                <li><Link to={'/StudantLogin'} class="dropdown-item "> <em>Studant Login</em></Link></li>
               <li> <Link to={'/Cheflogin'} class="dropdown-item "> <em>Chef login </em></Link></li>
          </ul>
        </div>
        <Link to={'/Appfood'} className="navbar-brand mx-auto"><em>1337FOOD</em></Link>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="button" href="">
          <Link to={'/Appfood'} className="navbar-brand mx-auto">
            <em>Vote</em>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
