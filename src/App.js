import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

// components
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/services' element={<ServicesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
