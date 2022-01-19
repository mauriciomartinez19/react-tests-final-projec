import React from 'react';
// react router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Navbar
import TopNavbar from './Navbar/TopNavbar';

//Pages

import HomePage from './Home';
import MenuPage from './Menu'
import ToursPage from './Tours';
import ReviewsPage from './Reviews';
import Contact from './Contact';
import AdminContact from './Admin-Contacts';
import Countries from './countries';
import Login from './login';
import Register from './login/register'

function App() {
  return (<Router>
    <TopNavbar />
    <Route exact path='/'>
      <HomePage />
    </Route>
    <Route path='/menu'>
      <MenuPage />
    </Route>
    <Route path='/reviews'>
      <ReviewsPage />
    </Route>
    <Route path='/tours'>
      <ToursPage />
    </Route>
    <Route path='/countries'>
      <Countries />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
    <Route path='/admin-contacts'>
      <AdminContact />
    </Route>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path='/register'>
      <Register />
    </Route>
  </Router>
  );
}

export default App;
