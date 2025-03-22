import Layout from './Pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home';
import './App.css';

export default function App() {
  return(
  <BrowserRouter>
    <Routes>
      {/* Layout akan selalu ditampilkan di semua halaman */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  {/* Home akan muncul di "/" */}
        
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
