import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import NavFooter from './NavFooter';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavFooter />}>
        <Route index element={<HomePage />}/>
        <Route path='login' element= {<LoginPage />}/>
        <Route path='signup' element= {<SignupPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
