import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Electronics from './pages/electronics';
import Jewlery from './pages/jewlerry';
import Mens from './pages/Mens';
import Womens from './pages/Womens';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewlery />} />
          <Route path="/men's clothing" element={<Mens />} />
          <Route path="/women's clothing" element={<Womens />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;