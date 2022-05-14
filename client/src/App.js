import React, { createContext, useReducer } from 'react';
import { Route, Routes as AppRoutes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components//Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Errorpage from './pages/Errorpage';
import { initialState, reducer } from './reducer/UseReducer';
import Courses from './pages/Courses';
import Admin from './pages/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <AppRoutes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<Errorpage />} />
        </AppRoutes >
      </UserContext.Provider>
    </>
  )
}

export default App;