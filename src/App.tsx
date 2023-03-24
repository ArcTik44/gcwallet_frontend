import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthView from './Views/AuthView/AuthView';
import CardDetailView from './Views/CardDetailView/CardDetailView';
import HomeView from './Views/HomeView/HomeView';
import NewCardView from './Views/NewCardView/NewCardView';
import UserView from './Views/UserView/UserView';
import { useContext } from 'react';
import NotFoundView from './Views/NotFoundView/NotFoundView';
import { UserContext } from './Services/UserContext';

const App = () => {

    const {isLogged} = useContext(UserContext);
  return (
    <Routes>
      <Route path='/' element={isLogged ? <HomeView/>:<Navigate to='/login'/>} />
      <Route path='/register' element={<AuthView/>}/>
      <Route path='/login' element={<AuthView />} />
      <Route path='/user' element={isLogged ? <UserView /> : <Navigate to='/login'/>}/>  
      <Route path='/addcard' element={isLogged ? <NewCardView /> : <Navigate to="/login"/>} />
      <Route path='/detailcard' element={isLogged ? <CardDetailView /> : <Navigate to="/login"/>} />
      <Route path='*' element={<NotFoundView/>}/>
    </Routes>
  );
}

export default App;
