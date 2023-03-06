import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthView from './Views/AuthView/AuthView';
import CardDetailView from './Views/CardDetailView/CardDetailView';
import HomeView from './Views/HomeView/HomeView';
import NewCardView from './Views/NewCardView/NewCardView';
import UserView from './Views/UserView/UserView';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/register' element={<AuthView/>}/>
      <Route path='/login' element={<AuthView />} />
      <Route path='/user' element={<UserView />} />
      <Route path='/addcard' element={<NewCardView />} />
      <Route path='/detailcard' element={<CardDetailView />} />
    </Routes>
  );
}

export default App;
