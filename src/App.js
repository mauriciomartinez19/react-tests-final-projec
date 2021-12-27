import React from 'react';
// react router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Navbar
import TopNavbar from './Navbar/TopNavbar';

//Pages

import Home from './Home/Home';
import MenuPage from './Menu'
import ToursPage from './Tours/ToursPage';


function App() {
  return (<Router>
    <TopNavbar />
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/menu'>
      <MenuPage />
    </Route>
    <Route path='/tours'>
      <ToursPage />
    </Route>
  </Router>
  );
}

export default App;
