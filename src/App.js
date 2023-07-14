import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar.js';
import ImageSlider from './components/imageslider//imageslider.js';
import Images from "./media";


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <ImageSlider></ImageSlider>
    </div>
  );
}

export default App;
