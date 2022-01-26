import React, { useEffect, useState } from 'react';
// react router
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

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
import Footer from './Footer'
import Profile from './profile'


//Loading page
import Loading from './Loading/loading';

function App() {

  const [isAunthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const Authenticate = async () => {
    const response = await fetch('http://localhost:5000/api/verify', {
      method: 'POST',
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
    const data = await response.json()
    console.log(data)
    if (data === 'the token is valid') {
      console.log('im here')
      setIsAuthenticated(true)
    } else setIsAuthenticated(false)
    setTimeout(() => {
      setIsLoading(false)
    }
      , 2500)

  }


  useEffect(() => {
    Authenticate()
  }, [])


  return (<Router>
    {isLoading
      ? <Loading />
      : <>
        <TopNavbar />
        <Route exact path='/'>
          {isAunthenticated
            ? <HomePage />
            : <Redirect to='/login' />}
        </Route>
        <Route path='/menu'>
          {isAunthenticated
            ? <MenuPage />
            : <Redirect to='/login' />}
        </Route>
        <Route path='/reviews'>
          {isAunthenticated
            ? <ReviewsPage />
            : <Redirect to='/login' />}
        </Route>
        <Route path='/tours'>
          {isAunthenticated
            ? <ToursPage />
            : <Redirect to='/login' />}
        </Route>
        <Route path='/countries'>
          {isAunthenticated
            ? <Countries />
            : <Redirect to='/login' />}
        </Route>
        <Route path='/contact'>
          {isAunthenticated
            ? <Contact />
            : <Redirect to='/login' />}
        </Route>
        <Route path='/admin-contacts'>
          {isAunthenticated
            ? <AdminContact />
            : <Redirect to='/login' />}
        </Route>
        <Route path='/profile'>
          {isAunthenticated
            ? <Profile />
            : <Redirect to='/login' />}
        </Route>
        <Route path='/login'>
          {isAunthenticated
            ? <HomePage />
            : <Login />}
        </Route>
        <Route path='/register'>
          {isAunthenticated
            ? <HomePage />
            : <Register />}
        </Route>
        <Footer />
      </>}
  </Router>
  );
}

export default App;
