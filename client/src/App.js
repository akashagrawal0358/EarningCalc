
import './App.css';
import NavSearchBar from './components/NavSearchBar';
import Navbar from './components/Navbar';
import EarningPage from './pages/EarningPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/earningpage' element={<EarningPage />} component={() => <div><NavSearchBar /> </div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
