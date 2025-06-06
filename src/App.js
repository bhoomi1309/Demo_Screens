import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/login';
import Signup from './screens/signup';
import AccountSettings from './screens/account';
import LandingScreen from './screens/landing_screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/" element={<LandingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
