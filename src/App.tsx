import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthView from './Views/AuthView/AuthView';
import CardDetailView from './Views/CardDetailView/CardDetailView';
import HomeView from './Views/HomeView/HomeView';
import NewCardView from './Views/NewCardView/NewCardView';
import UserView from './Views/UserView/UserView';
import React, { useContext } from 'react';
import { IUser } from './Services/auth';
import NotFoundView from './Views/NotFoundView/NotFoundView';
import { UserContext } from './Services/UserContext';

const App = () => {

    const {user} = useContext(UserContext);
  return (

    <Routes>
      <Route path='/' element={<HomeView/>} />
      <Route path='/register' element={<AuthView/>}/>
      <Route path='/login' element={<AuthView />} />
      <Route path='/user' element={<UserView />}/>  
      <Route path='/addcard' element={user ? <NewCardView /> : <Navigate to="/login"/>} />
      <Route path='/detailcard' element={user ? <CardDetailView /> : <Navigate to="/login"/>} />
      <Route path='*' element={<NotFoundView/>}/>
    </Routes>
  );
}

export default App;
