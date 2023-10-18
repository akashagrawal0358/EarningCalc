
import './App.css';
import Navbar from './components/Navbar';
import EarningPage from './pages/EarningPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/earningpage' element={<EarningPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
