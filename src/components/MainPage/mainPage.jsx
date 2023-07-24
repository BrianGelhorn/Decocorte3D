import NavBar from '../GeneralPages/navbar/navbar';
import ImageSlider from './imageslider/imageSlider';
import Footer from '../GeneralPages/aboutBar/footer';
import ProductCard from './productsPresentation/productCard/productcard';

const MainPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <ImageSlider></ImageSlider>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </>
  );
};

export default MainPage;
