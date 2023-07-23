import './App.css';
import NavBar from './components/navbar/navbar';
import ImageSlider from './components/MainPage/imageslider/imageSlider';
import Footer from './components/aboutBar/footer';
import ProductCard from './components/MainPage/productsPresentation/productCard/productcard';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <ImageSlider></ImageSlider>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <Footer></Footer>
    </div>
  );
}

export default App;
