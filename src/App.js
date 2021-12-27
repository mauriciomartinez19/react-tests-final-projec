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
  </Router>
  );
}

export default App;
