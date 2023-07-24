import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage/mainPage';
import Footer from './components/GeneralPages/aboutBar/footer';
import ProductsPage from './components/Products/productsPage';

function App() {
  return (
    <Routes>
      <Route path='/Inicio' element={<MainPage/>}/>
      <Route path='/Productos' element={<ProductsPage/>}/>
      <Route path='/Nosotros' element={<MainPage/>}/>
      <Route path='/Contacto' element={<MainPage/>}/>
      <Route path='*' element={<Navigate to='/Inicio'/>}/>
    </Routes>
  );
}

export default App;
